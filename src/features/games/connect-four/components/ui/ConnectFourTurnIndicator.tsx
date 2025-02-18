import { useConnectFourGame } from '../../context/ConnectFourGameProvider';

import styles from '../ui/ConnectFourTurnIndicator.module.css';

export default function ConnectFourTurnIndicator() {
    const { currentPlayer } = useConnectFourGame();

    function selectTurnIndicatorStyle(): string {
        switch (currentPlayer) {
            case 'red':
                return styles.redTurnIndicator;
            case 'yellow':
                return styles.yellowTurnIndicator;
            default:
                throw new Error('Invalid turn');
        }
    }

    return (
        <div className={styles.turnIndicatorContainer}>
            Turn: <div className={selectTurnIndicatorStyle()}></div>
        </div>
    );
}
