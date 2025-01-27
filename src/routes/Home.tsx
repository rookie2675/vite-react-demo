import { NavLink } from "react-router";

export default function Home(): React.JSX.Element {
    return (
        <NavLink to="/tic-tac-toe" end>
            Tic-Tac-Toe
        </NavLink>
    );
}
