import ReactLogo from '@/components/Logos/ReactLogo';
import ViteLogo from '@/components/Logos/ViteLogo';
import './Header.css';

export default function Header(): React.JSX.Element {
    return (
        <header className='header'>
            <ViteLogo />
            <ReactLogo />
            <h1>React + Vite Playground</h1>
        </header>
    );
}
