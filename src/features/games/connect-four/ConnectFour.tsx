import { useCallback, useState } from 'react';
import { ConnectFourBoard } from './ConnectFourBoard';
import { Token } from './ConnectFourTokenType';
import styles from './ConnectFour.module.css';

function selectTurnIndicatorStyle(turn: Token): string {
    switch (turn) {
        case 'red':
            return styles.redTurnIndicator;
        case 'yellow':
            return styles.yellowTurnIndicator;
        default:
            throw new Error('Invalid turn');
    }
}

export default function ConnectFour(): React.JSX.Element {
    console.log('Game is rendering...');

    const [turn, setTurn] = useState<Token>('red');

    const changeTurn = useCallback(function changeTurn(): void {
        setTurn((previousValue: Token) => {
            switch (previousValue) {
                case 'red':
                    return 'yellow';
                case 'yellow':
                    return 'red';
                default:
                    throw new Error('Invalid turn');
            }
        });
    }, []);

    return (
        <>
            <div className={styles.turnContainer}>
                Turn: <div className={selectTurnIndicatorStyle(turn)}></div>
            </div>
            <div className={styles.boardContainer}>
                <ConnectFourBoard changeTurn={changeTurn} />
            </div>
        </>
    );
}
