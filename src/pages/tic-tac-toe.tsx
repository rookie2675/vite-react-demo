import TicTacToeBoard from "../components/Boards/TicTacToe/TicTacToeBoard";
import styles from "./tic-tac-toe.module.css";

export default function TicTacToe(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <h2>Tic-Tac-Toe</h2>
            <TicTacToeBoard />
        </main>
    );
}
