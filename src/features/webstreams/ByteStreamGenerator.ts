export interface Props {
    readonly maxLines: number;
    readonly abortSignal: AbortSignal;
    readonly delayMilliseconds: number;
}

function sleep(milliSeconds: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, milliSeconds));
}

export function createGeneratedByteStream(props: Props): ReadableStream<Uint8Array> {
    const encoder = new TextEncoder();
    let i = 0;

    return new ReadableStream<Uint8Array>({
        async pull(controller) {
            
            if (props.abortSignal.aborted) {
                controller.error(new DOMException('Aborted', 'AbortError'));
                return;
            }

            if (i >= props.maxLines) {
                controller.close();
                return;
            }

            await sleep(props.delayMilliseconds);

            if (props.abortSignal.aborted) {
                controller.error(new DOMException('Aborted', 'AbortError'));
                return;
            }

            const line: string = `${String(i).padStart(4, '0')}  generated line at ${new Date().toLocaleTimeString()}\n`;
            const encodedLine: Uint8Array = encoder.encode(line);
            controller.enqueue(encodedLine);
            
            i += 1;
        },
        cancel() {
            i = props.maxLines;
        },
    });
}