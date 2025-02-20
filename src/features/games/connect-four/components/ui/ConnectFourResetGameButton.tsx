import { useConnectFourGame } from '@/features/games/connect-four/hooks/useConnectFourGame';

export default function ConnectFourResetGameButton(): React.JSX.Element {
    const { resetGame } = useConnectFourGame();

    function onClick(): void {
        resetGame();
    }

    return <button onClick={onClick}>Reset Game</button>;
}
