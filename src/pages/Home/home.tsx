import NavigationButton from "../../components/Buttons/NavigationButton";
import "./home.css";

export default function Home(): React.JSX.Element {
    return (
        <div className="buttons">
            <NavigationButton text="Connect Four" path="/connect-four" />
            <NavigationButton text="Tic-Tac-Toe" path="/tic-tac-toe" />
        </div>
    );
}
