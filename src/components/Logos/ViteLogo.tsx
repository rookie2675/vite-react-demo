import logo from "../../assets/vite.svg";

interface Props {
    readonly width: string;
}

export default function ViteLogo(props: Props): React.JSX.Element {
    return <img src={logo} alt="vite-logo" width={props.width} />;
}
