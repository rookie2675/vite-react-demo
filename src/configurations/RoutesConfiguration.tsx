import { Routes, Route } from "react-router";
import Home from "../routes/Home";
import TicTacToe from "../routes/TicTacToe";

export default function RoutesConfiguration(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
    );
}
