import logo from "@/assets/react.svg";

interface Props {
    readonly width: string;
}

export default function ReactLogo(props: Props): React.JSX.Element {
    return <img src={logo} alt="react-logo" width={props.width} />;
}
