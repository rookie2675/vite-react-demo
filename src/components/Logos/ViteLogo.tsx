import logo from "@/assets/vite.svg";
import NavigationLogo from "./NavigationLogo";

const url = "https://vitejs.dev/";

export default function ViteLogo(): React.JSX.Element {
    return <NavigationLogo url={url} alt="vite" logo={logo} />;
}
