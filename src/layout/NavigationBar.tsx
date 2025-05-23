import Header from './Header';
import styles from './NavigationBar.module.css';

export default function NavigationBar(): React.JSX.Element {
    return (
        <nav className={styles.navigationbar}>
            <Header />
            <button>
                <a href='/'>Home</a>
            </button>
            <button>
                <a href='/table'>Table</a>
            </button>
            <button>
                <a href='/tic-tac-toe'>Tic-Tac-Toe</a>{' '}
            </button>
            <button>
                <a href='/connect-four'>Connect Four</a>{' '}
            </button>
            <button>
                <a href='/suspense-demonstration'>Suspense Demonstration</a>{' '}
            </button>
            <div className={styles.copyright}>Copyright © 2025 Ricardo Almeida</div>
        </nav>
    );
}
