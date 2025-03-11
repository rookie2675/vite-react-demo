import ControlledNumberInputComponent from '@/components/Inputs/ControlledNumberInputComponent';
import TableComponent from '@/components/Tables/TableComponent';
import { useState } from 'react';
import styles from './TablePage.module.css';

export default function TablePage(): React.JSX.Element {
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);
    const [bordersVisible, setBordersVisible] = useState<boolean>(false);

    function handleToggleBorders(): void {
        setBordersVisible(!bordersVisible);
    }

    return (
        <>
            <div className={styles.options}>
                <label className={styles.label}>
                    Rows:
                    <ControlledNumberInputComponent min={1} max={100} value={rows} setValue={setRows} />
                </label>
                <label className={styles.label}>
                    Columns:
                    <ControlledNumberInputComponent min={1} max={100} value={columns} setValue={setColumns} />
                </label>
            </div>
            <button onClick={handleToggleBorders}>Toggle Borders</button>
            <TableComponent rows={rows} columns={columns} bordersVisible={bordersVisible} />
        </>
    );
}
