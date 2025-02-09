import NavigationButton from "@/components/Buttons/NavigationButton";
import styles from "./HomePage.module.css";

export default function Home(): React.JSX.Element {
    return (
        <div className={styles.buttons}>
            <NavigationButton text="Table" path="/table" />
            <NavigationButton text="Tic-Tac-Toe" path="/tic-tac-toe" />
            <NavigationButton text="Connect Four" path="/connect-four" />
        </div>
    );
}
