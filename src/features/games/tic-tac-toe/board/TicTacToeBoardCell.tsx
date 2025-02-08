import { useState } from "react";
import styles from "./TicTacToeBoardCell.module.css";
import TicTacToeCrossToken from "../token/TicTacToeCrossToken";
import TicTacToeCircleToken from "../token/TicTacToeCircleToken";

export default function TicTacToeBoardSquare(): React.JSX.Element {
    type Token = "X" | "O" | null;
    const [token, setToken] = useState<Token>(null);

    function handleClick(): void {
        setToken(token === "X" ? "O" : "X");
    }

    return (
        <td className={styles.cell} onClick={handleClick}>
            {token === "X" ? <TicTacToeCrossToken /> : <TicTacToeCircleToken />}
        </td>
    );
}
