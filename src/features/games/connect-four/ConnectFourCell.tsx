import { useState } from 'react';
import styles from './ConnectFourCell.module.css';
import { Token } from './ConnectFourTokenType';

function selectStyle(token: Token): string {
    switch (token) {
        case 'red':
            return styles.redCell;
        case 'yellow':
            return styles.yellowCell;
        default:
            return styles.whiteCell;
    }
}

export default function ConnectFourCell(): React.JSX.Element {
    const [token, setToken] = useState<Token>(null);

    return <div className={selectStyle(token)}></div>;
}
