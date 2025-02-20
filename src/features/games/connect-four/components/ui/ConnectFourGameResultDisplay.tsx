import { useConnectFourGame } from '@/features/games/connect-four/hooks/useConnectFourGame';

export default function ConnectFourGameResultDisplay(): React.JSX.Element {
    const { winner } = useConnectFourGame();

    if (winner) {
        return <div>Winner: {winner}</div>;
    }

    return <div>Game over</div>;
}
