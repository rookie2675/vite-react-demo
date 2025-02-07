import { useState } from "react";
import styles from "./TicTacToeBoardCell.module.css";

export default function TicTacToeBoardSquare(): React.JSX.Element {
    const [token, setToken] = useState("");

    function handleClick(): void {
        setToken(token === "X" ? "O" : "X");
    }

    return (
        <td className={styles.cell} onClick={handleClick}>
            {token}
        </td>
    );
}
