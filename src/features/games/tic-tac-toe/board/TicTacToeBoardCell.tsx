import { useState } from "react";
import styles from "./TicTacToeBoardCell.module.css";
import TicTacToeCrossToken from "../token/TicTacToeCrossToken";
import TicTacToeCircleToken from "../token/TicTacToeCircleToken";
import { Token } from "../token/TicTacToeToken";

interface Props {
    readonly turn: Token;
    readonly changeTurn: () => void;
}

function chooseTokenComponent(token: Token): React.JSX.Element | null {
    if (token === "X") {
        return <TicTacToeCrossToken />;
    } else if (token === "O") {
        return <TicTacToeCircleToken />;
    } else {
        return null;
    }
}

export default function TicTacToeBoardSquare(props: Props): React.JSX.Element {
    const [token, setToken] = useState<Token>(null);

    function handleClick(): void {
        if (token !== null) {
            return;
        }

        setToken(props.turn);
        props.changeTurn();
    }

    const component = chooseTokenComponent(token);

    return (
        <td className={styles.cell} onClick={handleClick}>
            {component}
        </td>
    );
}
