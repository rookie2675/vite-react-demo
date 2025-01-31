import ConnectFourBoard from "../components/Boards/ConnectFour/ConnectFourBoard";
import styles from "./connect-four.module.css";

export default function ConnectFour(): React.JSX.Element {
    return (
        <main className={styles.main}>
            <h2>Connect Four</h2>
            <ConnectFourBoard />;
        </main>
    );
}
