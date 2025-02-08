import styles from "./ConnectFourBoard.module.css";

const rows = 6;
const columns = 7;

function createGrid(): React.JSX.Element[][] {
    const array: React.JSX.Element[][] = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const row: React.JSX.Element[] = [];

        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            row.push(<td className={styles.square} key={`${rowIndex.toString()}${columnIndex.toString()}`}></td>);
        }

        array.push(row);
    }

    return array;
}

export default function ConnectFourBoard(): React.JSX.Element {
    const grid = createGrid();

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
