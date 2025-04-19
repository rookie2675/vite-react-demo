import RoutesConfiguration from './configurations/RoutesConfiguration';
import NavigationBar from './layout/NavigationBar';
import styles from './App.module.css';

export default function App(): React.JSX.Element {
    return (
        <div className={styles.app}>
            <NavigationBar />
            <main>
                <RoutesConfiguration />
            </main>
        </div>
    );
}
