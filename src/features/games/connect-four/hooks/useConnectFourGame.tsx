import { useContext } from 'react';
import { ConnectFourGameContext } from '@/features/games/connect-four/context/ConnectFourGameContext';

export function useConnectFourGame() {
    const context = useContext(ConnectFourGameContext);

    if (context === undefined) {
        throw new Error('useConnectFourGame must be used within a ConnectFourGameProvider');
    }

    return context;
}
