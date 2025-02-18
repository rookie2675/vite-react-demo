import React from 'react';
import { useConnectFourGame } from '@/features/games/connect-four/context/ConnectFourGameProvider';
import ConnectFourBoardCellComponent from '@/features/games/connect-four/components/board/ConnectFourBoardCellComponent';

import styles from './ConnectFourBoardColumnComponent.module.css';

export interface ConnectFourBoardColumnComponentProps {
    readonly index: number;
}

export default function ConnectFourBoardColumnComponent(props: ConnectFourBoardColumnComponentProps): React.JSX.Element {
    const { makeMove, boardState } = useConnectFourGame();

    function onClick(): void {
        makeMove(props.index);
    }

    return (
        <button
            tabIndex={0}
            key={props.index}
            onClick={onClick}
            className={styles.column}
            id={`column-${String(props.index)}`}
            aria-label={`Select column ${String(props.index + 1)}`}
        >
            {boardState[props.index].map((_, row) => {
                return (
                    <div key={`${String(props.index)}-${String(row)}`}>
                        <ConnectFourBoardCellComponent row={row} column={props.index} />
                    </div>
                );
            })}
        </button>
    );
}
