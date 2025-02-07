import { Routes, Route } from "react-router";
import Home from "@/pages/HomePage";
import TicTacToe from "@/pages/TicTacToePage";
import ConnectFour from "@/pages/ConnectFourPage";
import TablePage from "@/pages/TablePage";

export default function RoutesConfiguration(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/connect-four" element={<ConnectFour />} />
        </Routes>
    );
}
