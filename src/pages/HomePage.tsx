import styles from './HomePage.module.css';
import ReactLogo from '@/components/Logos/ReactLogo';
import ViteLogo from '@/components/Logos/ViteLogo';

export default function Home(): React.JSX.Element {
    return (
        <div className={styles.home}>
            <ReactLogo /> <ViteLogo /> <h1>React + Vite Playground</h1>
        </div>
    );
}
