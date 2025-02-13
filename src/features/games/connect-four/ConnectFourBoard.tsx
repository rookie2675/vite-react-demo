import React from 'react';
import styles from './ConnectFourBoard.module.css';
import ConnectFourBoardColumnComponent, { ConnectFourBoardColumnComponentProps } from './ConnectFourBoardColumnComponent';

interface ConnectFourBoardConfiguration {
    rows: number;
    columns: number;
}

const configuration: ConnectFourBoardConfiguration = {
    rows: 6,
    columns: 7,
};

function createBoard(configuration: ConnectFourBoardConfiguration, changeTurn: () => void): React.JSX.Element[] {
    const board: React.JSX.Element[] = [];

    for (let index = 0; index < configuration.columns; index++) {
        const columnProps: ConnectFourBoardColumnComponentProps = {
            index,
            changeTurn,
            rows: configuration.rows,
        };

        board.push(<ConnectFourBoardColumnComponent key={index} {...columnProps} />);
    }

    return board;
}

interface ConnectFourBoardProps {
    changeTurn: () => void;
}

export const ConnectFourBoard = React.memo(function ConnectFourBoard(props: ConnectFourBoardProps) {
    console.log('Board is rendering...');

    const board: React.JSX.Element[] = createBoard(configuration, props.changeTurn);

    return (
        <div id='board' className={styles.board}>
            {board}
        </div>
    );
});
