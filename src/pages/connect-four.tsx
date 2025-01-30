import ConnectFourBoard from "../components/Boards/ConnectFour/ConnectFourBoard";
import "./connect-four.css";

export default function ConnectFour(): React.JSX.Element {
    return (
        <main>
            <h2>Connect Four</h2>
            <ConnectFourBoard />;
        </main>
    );
}
