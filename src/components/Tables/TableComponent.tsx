import styles from './TableComponent.module.css';

interface Props {
    readonly rows: number;
    readonly columns: number;
    readonly bordersVisible: boolean;
}

export default function TableComponent(props: Props): React.JSX.Element {
    return (
        <table className={`${styles.table} ${!props.bordersVisible ? styles.removeBorders : ''}`}>
            <tbody>
                {Array.from({ length: props.rows }, (_, rowIndex) => (
                    <tr key={`Row-${rowIndex.toString()}`}>
                        {Array.from({ length: props.columns }, (_, colIndex) => (
                            <td key={`Col-${colIndex.toString()}`} className={styles.cell}>
                                Cell {rowIndex + 1}-{colIndex + 1}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
