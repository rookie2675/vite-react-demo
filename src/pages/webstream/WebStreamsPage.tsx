import Console from '@/components/Console';
import styles from './WebStreamsPage.module.css';
import WebStreamsControls from './components/WebStreamsControls';
import useWebStreamsDemo from './hooks/useWebStreamsDemo';

export default function WebStreamsPage(): React.JSX.Element {
    
    const { runState, delayMs, maxLines, bytesReceived, linesReceived, output, setDelayMs, setMaxLines, start, stop, reset } = useWebStreamsDemo();

    return (
        <div className={styles.container}>
            
            <h2>Web Streams Demo</h2>

            <WebStreamsControls 
                delayMs={delayMs}
                setDelayMs={setDelayMs}
                runState={runState}
                bytesReceived={bytesReceived}
                linesReceived={linesReceived}
                start={() => void start()}
                stop={stop}
                reset={reset}
                maxLines={maxLines}
                setMaxLines={setMaxLines}
            />

            <section className={styles.outputSection}>
                <div className={styles.outputHeader}>
                    <strong>Live output</strong>
                    <span className={styles.hint}>Newest output is appended; view is capped.</span>
                </div>
                <Console content={output || 'Console output will appear here'} />
            </section>
        </div>
    );
}
