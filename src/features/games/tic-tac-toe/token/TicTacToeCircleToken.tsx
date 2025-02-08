import circle from "@/assets/circle.svg";
import styles from "./TicTacToeCircleToken.module.css";

export default function TicTacToeCircleToken(): React.JSX.Element {
    return <img src={circle} alt="circle" className={styles.token} />;
}
