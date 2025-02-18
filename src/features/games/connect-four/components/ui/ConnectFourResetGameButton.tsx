import { useConnectFourGame } from '@/features/games/connect-four/context/ConnectFourGameProvider';

export default function ConnectFourResetGameButton(): React.JSX.Element {
    const { resetGame } = useConnectFourGame();

    function onClick(): void {
        resetGame();
    }

    return <button onClick={onClick}>Reset Game</button>;
}
