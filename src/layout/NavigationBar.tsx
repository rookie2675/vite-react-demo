import styles from './NavigationBar.module.css';

export default function NavigationBar(): React.JSX.Element {
    return (
        <nav className={styles.navigationbar}>
            <a href='/'>Home</a>
            <a href='/table'>Table</a>
            <a href='/tic-tac-toe'>Tic-Tac-Toe</a>
            <a href='/connect-four'>Connect Four</a>
        </nav>
    );
}
