import { useState, useEffect } from "react";
import styles from "./TicTacToeBoard.module.css";
import TicTacToeBoardCell from "./TicTacToeBoardCell";
import { Token } from "../token/TicTacToeToken";

const rows = 3;
const columns = 3;

export default function TicTacToeBoard(): React.JSX.Element {
    if (process.env.NODE_ENV === "development") {
        console.log("Board is rendering...");
    }

    const [turn, setTurn] = useState<Token>(null);

    // Empty dependency array ensures this runs only on first render.
    // Allows the board to render the cells with null values before setting the turn to 'X'
    useEffect(() => {
        setTurn("X");
    }, []);

    function changeTurn(): void {
        setTurn(turn === "X" ? "O" : "X");
    }

    function createTicTacToeGrid(): React.JSX.Element[][] {
        const array: React.JSX.Element[][] = [];

        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            const row: React.JSX.Element[] = [];

            for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
                const key = `${rowIndex.toString()}${columnIndex.toString()}`;
                const button = <TicTacToeBoardCell key={key} turn={turn} changeTurn={changeTurn} />;
                row.push(button);
            }

            array.push(row);
        }

        return array;
    }

    return (
        <>
            Turn: {turn}
            <table className={styles.board}>
                <tbody>
                    {createTicTacToeGrid().map((row, rowIndex) => (
                        <tr key={rowIndex}>{row}</tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
