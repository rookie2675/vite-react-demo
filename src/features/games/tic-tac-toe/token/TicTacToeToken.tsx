import styles from "./TicTacToeToken.module.css";

export type Token = "X" | "O" | null;

interface Props {
    readonly alt: string;
    readonly image: string;
}

export default function TicTacToeToken(props: Props): React.JSX.Element {
    return <img src={props.image} alt={props.alt} className={styles.token} />;
}
