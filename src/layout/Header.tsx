import ReactLogo from '@/components/Logos/ReactLogo';
import ViteLogo from '@/components/Logos/ViteLogo';
import styles from './Header.module.css';

export default function Header(): React.JSX.Element {
    return (
        <header>
            <div className={styles.logos}>
                <ViteLogo />
                <ReactLogo />
            </div>
            <div className={styles.title}>
                <h1>React + Vite Playground</h1>
            </div>
        </header>
    );
}
