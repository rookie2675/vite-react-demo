import { Routes, Route } from "react-router";
import Home from "../pages/Home/home";
import TicTacToe from "../pages/tic-tac-toe";
import ConnectFour from "../pages/connect-four";

export default function RoutesConfiguration(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/connect-four" element={<ConnectFour />} />
        </Routes>
    );
}
