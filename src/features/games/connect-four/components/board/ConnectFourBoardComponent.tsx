import React from 'react';
import { useConnectFourGame } from '@/features/games/connect-four/hooks/useConnectFourGame';
import ConnectFourBoardColumnComponent from '@/features/games/connect-four/components/board/ConnectFourBoardColumnComponent';

import styles from './ConnectFourBoardComponent.module.css';

export default function ConnectFourBoard(): React.JSX.Element {
    const { boardState } = useConnectFourGame();

    return (
        <div id='board' className={styles.board}>
            {boardState.map((_, index) => (
                <ConnectFourBoardColumnComponent key={`column-${String(index)}`} index={index} />
            ))}
        </div>
    );
}
