/**
 * Creates a pass-through transform for counting bytes.
 *
 * **Purpose**
 * - Keep track of how many bytes have flowed through the stream (e.g. for UI counters).
 * - Forward the original chunk unchanged so downstream transforms keep working.
 *
 * **Input / Output**
 * - Input: `Uint8Array` chunks
 * - Output: same chunk forwarded as a `BufferSource`
 *
 * **Why output `BufferSource`?**
 * `TextDecoderStream` consumes `BufferSource`. `Uint8Array` is a valid `BufferSource` at runtime,
 * but TypeScript's DOM typings can be strict/incompatible in some setups, so we cast only to make
 * the pipeline type-check cleanly.
 *
 * @param onBytes Callback invoked once per chunk with the chunk's `byteLength`.
 */
export function createByteCounterTransform(onBytes: (byteLength: number) => void): TransformStream<Uint8Array, BufferSource> {
    return new TransformStream<Uint8Array, BufferSource>({
        transform(chunk, controller) {
            onBytes(chunk.byteLength);
            controller.enqueue(chunk as unknown as BufferSource);
        },
    });
}
