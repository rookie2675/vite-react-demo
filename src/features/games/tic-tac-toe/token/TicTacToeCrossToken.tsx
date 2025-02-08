import cross from "@/assets/cross.svg";
import styles from "./TicTacToeCrossToken.module.css";

export default function TicTacToeCrossToken(): React.JSX.Element {
    return <img src={cross} alt="cross" className={styles.token} />;
}
