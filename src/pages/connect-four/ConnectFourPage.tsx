import { ConnectFourGameProvider } from '@/features/games/connect-four/context/ConnectFourGameProvider';
import ConnectFourTurnIndicator from '@/features/games/connect-four/components/ui/ConnectFourTurnIndicator';
import ConnectFourResetGameButton from '@/features/games/connect-four/components/ui/ConnectFourResetGameButton';
import ConnectFourBoardComponent from '@/features/games/connect-four/components/board/ConnectFourBoardComponent';
import ConnectFourGameResultDisplay from '@/features/games/connect-four/components/ui/ConnectFourGameResultDisplay';

import styles from './ConnectFourPage.module.css';

export default function ConnectFourPage(): React.JSX.Element {
    return (
        <ConnectFourGameProvider>
            <ConnectFourTurnIndicator />
            <div className={styles.boardContainer}>
                <ConnectFourBoardComponent />
            </div>
            <ConnectFourResetGameButton />
            <ConnectFourGameResultDisplay />
        </ConnectFourGameProvider>
    );
}
