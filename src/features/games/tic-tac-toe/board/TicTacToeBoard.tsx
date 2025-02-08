import styles from "./TicTacToeBoard.module.css";
import TicTacToeBoardCell from "../../../components/Boards/TicTacToe/TicTacToeBoardCell";

const rows = 3;
const columns = 3;

function createTicTacToeGrid(): React.JSX.Element[][] {
    const array: React.JSX.Element[][] = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row: React.JSX.Element[] = [];

        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            const key = `${rowIndex.toString()}${columnIndex.toString()}`;
            const button = <TicTacToeBoardCell key={key} />;
            row.push(button);
        }

        array.push(row);
    }

    return array;
}

export default function TicTacToeBoard(): React.JSX.Element {
    if (process.env.NODE_ENV === "development") {
        console.log("Board is rendering...");
    }

    const grid = createTicTacToeGrid();

    return (
        <table className={styles.board}>
            <tbody>
                {grid.map((row, rowIndex) => (
                    <tr key={rowIndex}>{row}</tr>
                ))}
            </tbody>
        </table>
    );
}
