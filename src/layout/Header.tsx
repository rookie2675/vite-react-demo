import ReactLogo from "@/components/Logos/ReactLogo";
import ViteLogo from "@/components/Logos/ViteLogo";
import "./Header.css";

interface Props {
    readonly children: React.JSX.Element;
}

export default function Header(props: Props): React.JSX.Element {
    return (
        <>
            <header className="header">
                <ViteLogo />
                <ReactLogo />
                <h1>React + Vite Playground</h1>
            </header>
            {props.children}
        </>
    );
}
