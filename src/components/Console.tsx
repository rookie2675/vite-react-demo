import styles from './Console.module.css';

interface Props {
    readonly content: string;
}

export default function Console(props: Props) {
    return <pre className={styles.console}>{props.content}</pre>;
}