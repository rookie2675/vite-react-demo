import { useConnectFourGame } from '@/features/games/connect-four/context/ConnectFourGameProvider';

import styles from './ConnectFourBoardCellComponent.module.css';

interface ConnectFourBoardCellComponentProps {
    row: number;
    column: number;
}

export default function ConnectFourBoardCellComponent(props: ConnectFourBoardCellComponentProps): React.JSX.Element {
    const { boardState } = useConnectFourGame();
    const token = boardState[props.column][props.row];

    function chooseCellClassName(): string {
        switch (token) {
            case 'red':
                return styles.redCell;
            case 'yellow':
                return styles.yellowCell;
            default:
                return styles.whiteCell;
        }
    }

    return <div className={chooseCellClassName()}></div>;
}
