import styles from "./NavigationLogo.module.css";

interface Props {
    readonly url: string;
    readonly alt: string;
    readonly logo: string;
}

export default function NavigationLogo(props: Props): React.JSX.Element {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className={styles.container}>
            <img src={props.logo} alt={props.alt} width={40} />
        </a>
    );
}
