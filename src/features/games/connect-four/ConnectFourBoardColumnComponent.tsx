import ConnectFourCell from './ConnectFourCell';
import styles from './ConnectFourBoardColumnComponent.module.css';

function createCell(row: number, column: number): ReturnType<typeof ConnectFourCell> {
    const key = `${String(row)}-${String(column)}`;

    return (
        <div key={key}>
            <ConnectFourCell />
        </div>
    );
}

function createColumn(index: number, rows: number): ReturnType<typeof ConnectFourCell>[] {
    const column: ReturnType<typeof ConnectFourCell>[] = [];

    for (let row = 0; row < rows; row++) {
        const cell = createCell(row, index);
        column.push(cell);
    }

    return column;
}

export interface ConnectFourBoardColumnComponentProps {
    readonly rows: number;
    readonly index: number;
    readonly changeTurn: () => void;
}

export default function ConnectFourBoardColumnComponent(props: ConnectFourBoardColumnComponentProps): React.JSX.Element {
    console.log('Column is rendering...');

    const column: ReturnType<typeof ConnectFourCell>[] = createColumn(props.index, props.rows);

    function onClick(): void {
        console.log(`Column clicked: ${String(props.index)}`);
        props.changeTurn();
    }

    return (
        <button
            id={`column-${String(props.index)}`}
            key={props.index}
            className={styles.column}
            onClick={onClick}
            aria-label={`Select column ${String(props.index + 1)}`}
            tabIndex={0}
        >
            {column}
        </button>
    );
}
