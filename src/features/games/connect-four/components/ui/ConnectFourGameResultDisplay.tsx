import { useConnectFourGame } from '@/features/games/connect-four/hooks/useConnectFourGame';

import styles from './ConnectFourGameResultDisplay.module.css';
import capitalize from '@/utilities/capitalize';

export default function ConnectFourGameResultDisplay(): React.JSX.Element | null {
    const { winner } = useConnectFourGame();

    if (winner) {
        const className = winner === 'red' ? styles.redText : styles.yellowText;
        return (
            <div className={styles.text}>
                <span className={className}>{capitalize(winner)} </span>
                <span>player won!</span>
            </div>
        );
    }

    return null;
}
