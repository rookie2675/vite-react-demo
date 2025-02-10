import { useEffect, useState } from "react";
import styles from "./ConnectFourBoard.module.css";
import ConnectFourBoardCell from "./ConnectFourBoardCell";
import chip from "@/assets/chip.svg";

export type Token = "red" | "yellow" | null;

const rows = 6;
const columns = 7;

function createGrid(currentToken: Token, changeTurn: () => void): React.JSX.Element[][] {
    const array: React.JSX.Element[][] = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row: React.JSX.Element[] = [];

        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            const key = `${rowIndex.toString()}${columnIndex.toString()}`;
            row.push(<ConnectFourBoardCell key={key} token={currentToken} changeTurn={changeTurn} />);
        }

        array.push(row);
    }

    return array;
}

export default function ConnectFourBoard(): React.JSX.Element {
    const [turn, setTurn] = useState<Token>(null);

    function changeTurn(): void {
        setTurn(turn === "red" ? "yellow" : "red");
    }

    const grid = createGrid(null, changeTurn);

    useEffect(() => {
        setTurn("red");
    }, []);

    return (
        <>
            <div>Turn: {turn}</div>

            <table className={styles.table}>
                <tbody className={styles.tbody}>
                    {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>{row}</tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
