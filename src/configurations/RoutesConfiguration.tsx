import { Routes, Route } from 'react-router';
import Home from '@/pages/HomePage';
import TicTacToe from '@/pages/TicTacToePage';
import TablePage from '@/pages/TablePage';
import ConnectFour from '@/pages/connect-four/ConnectFourPage';

export default function RoutesConfiguration(): React.JSX.Element {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/table' element={<TablePage />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />
            <Route path='/connect-four' element={<ConnectFour />} />
        </Routes>
    );
}
