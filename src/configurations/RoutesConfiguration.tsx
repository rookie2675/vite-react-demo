import { Routes, Route } from 'react-router';
import Home from '@/pages/HomePage';
import TicTacToe from '@/pages/TicTacToePage';
import TablePage from '@/pages/table/TablePage';
import ConnectFour from '@/pages/connect-four/ConnectFourPage';
import SuspenseDemonstration from '@/pages/suspense-demonstration/SuspenseDemonstration';
import WebStreamsPage from '@/pages/webstream/WebStreamsPage';

export default function RoutesConfiguration(): React.JSX.Element {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/table' element={<TablePage />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />
            <Route path='/connect-four' element={<ConnectFour />} />
            <Route path='/suspense-demonstration' element={<SuspenseDemonstration />} />
            <Route path='/web-streams' element={<WebStreamsPage />} />
        </Routes>
    );
}
