import logo from "@/assets/react.svg";
import NavigationLogo from "./NavigationLogo";

const url = "https://react.dev/";

export default function ReactLogo(): React.JSX.Element {
    return <NavigationLogo url={url} alt="react" logo={logo} />;
}
