import RoutesConfiguration from './configurations/RoutesConfiguration';
import Header from './layout/Header';
import NavigationBar from './layout/NavigationBar';

export default function App(): React.JSX.Element {
    return (
        <div className='app'>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <NavigationBar />
                <main style={{ flex: 14 }}>
                    <RoutesConfiguration />
                </main>
            </div>
        </div>
    );
}
