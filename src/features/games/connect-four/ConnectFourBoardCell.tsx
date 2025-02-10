import styles from "./ConnectFourBoardCell.module.css";
import { Token } from "./ConnectFourBoard";

interface Props {
    readonly token: Token;
    readonly changeTurn: () => void;
}

export default function ConnectFourBoardCell(props: Props): React.JSX.Element {
    let style = "";

    if (props.token === "red") {
        style = styles.redCell;
    } else if (props.token === "yellow") {
        style = styles.yellowCell;
    } else {
        style = styles.whiteCell;
    }

    return <td className={style} onClick={props.changeTurn}></td>;
}
