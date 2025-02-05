import { useState } from "react";
import ControlledNumberInputComponent from "../Inputs/ControlledNumberInputComponent";
import styles from "./TableComponent.module.css";

function generateTable(rows: number, columns: number): React.JSX.Element[] {
    const table = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            const key = `${i.toString()}-${j.toString()}`;
            const cell = (
                <td key={key} className={styles.cell}>
                    {key}
                </td>
            );
            row.push(cell);
        }

        table.push(<tr key={i.toString()}>{row}</tr>);
    }

    return table;
}

export default function Table(): React.JSX.Element {
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const table = generateTable(rows, columns);

    return (
        <>
            <div className={styles.options}>
                <label>
                    Rows:
                    <ControlledNumberInputComponent min={1} max={100} value={rows} setValue={setRows} />
                </label>
                <label>
                    Columns:
                    <ControlledNumberInputComponent min={1} max={100} value={columns} setValue={setColumns} />
                </label>
            </div>
            <table className={styles.table}>
                <tbody>{table}</tbody>
            </table>
        </>
    );
}
