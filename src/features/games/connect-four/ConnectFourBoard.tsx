import styles from "./ConnectFourBoard.module.css";
import ConnectFourBoardCell from "./ConnectFourBoardCell";

export type Token = "red" | "yellow" | null;

const rows = 6;
const columns = 7;

function createGrid(currentToken: Token): React.JSX.Element[][] {
    const array: React.JSX.Element[][] = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row: React.JSX.Element[] = [];

        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            const key = `${rowIndex.toString()}${columnIndex.toString()}`;
            row.push(<ConnectFourBoardCell key={key} token={currentToken} />);
        }

        array.push(row);
    }

    return array;
}

export default function ConnectFourBoard(): React.JSX.Element {
    const grid = createGrid(null);

    return (
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                {grid.map((row, rowIndex) => (
                    <tr key={rowIndex}>{row}</tr>
                ))}
            </tbody>
        </table>
    );
}
