import RoutesConfiguration from './configurations/RoutesConfiguration';
import Header from './layout/Header';

export default function App(): React.JSX.Element {
    return (
        <div className='app'>
            <Header />
            <main>
                <RoutesConfiguration />
            </main>
        </div>
    );
}
