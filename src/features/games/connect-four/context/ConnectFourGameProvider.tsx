import React, { useState, useCallback, useMemo } from 'react';
import { ConnectFourGameContext } from './ConnectFourGameContext';

export type Token = 'red' | 'yellow' | null;

// ===================== Board Configuration =====================

interface BoardConfiguration {
    rows: number;
    columns: number;
}

const BOARD_CONFIGURATION: BoardConfiguration = {
    rows: 6,
    columns: 7,
};

// ===================== Utilities =====================

function checkWinCondition(board: Token[][], column: number, row: number, player: Token): boolean {
    const directions = [
        // Vertical
        { dx: [0, 0], dy: [1, -1] },

        // Horizontal
        { dx: [1, -1], dy: [0, 0] },

        // Diagonal \
        { dx: [1, -1], dy: [1, -1] },

        // Diagonal /
        { dx: [1, -1], dy: [-1, 1] },
    ];

    return directions.some(({ dx, dy }) => {
        let count = 1;

        for (const direction of [-1, 1]) {
            let increment = 1;

            while (increment <= 3) {
                const newColumn = column + dx[direction === 1 ? 0 : 1] * increment;
                const newRow = row + dy[direction === 1 ? 0 : 1] * increment;

                const isWithinBounds =
                    newColumn >= 0 && newColumn < BOARD_CONFIGURATION.columns && newRow >= 0 && newRow < BOARD_CONFIGURATION.rows;
                const isPlayersToken = isWithinBounds && board[newColumn][newRow] === player;

                if (!isPlayersToken) {
                    break;
                }

                count++;
                increment++;
            }
        }

        return count >= 4;
    });
}

// ===================== Context =====================

interface ConnectFourGameProviderProps {
    children: React.ReactNode;
}

export function ConnectFourGameProvider(props: ConnectFourGameProviderProps) {
    const initialBoardState: Token[][] = Array.from({ length: BOARD_CONFIGURATION.columns }, () =>
        Array.from({ length: BOARD_CONFIGURATION.rows }, () => null)
    );

    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState<Token | null>(null);
    const [currentPlayer, setCurrentPlayer] = useState<Token>('red');
    const [boardState, setBoardState] = useState<Token[][]>(initialBoardState);

    const makeMove = useCallback(
        (column: number): void => {
            if (column < 0 || column >= BOARD_CONFIGURATION.columns || isGameOver) {
                return;
            }

            // Find the first empty row in the selected column
            const availableRow: number = boardState[column].findLastIndex((cell) => cell === null);

            if (availableRow === -1) {
                return;
            }

            // Update board state
            const newBoardState = [...boardState];
            newBoardState[column] = [...newBoardState[column]];
            newBoardState[column][availableRow] = currentPlayer;

            setBoardState(newBoardState);

            if (checkWinCondition(newBoardState, column, availableRow, currentPlayer)) {
                setWinner(currentPlayer);
                setIsGameOver(true);
            } else {
                setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
            }
        },
        [boardState, currentPlayer, isGameOver]
    );

    const resetGame = useCallback(() => {
        setWinner(null);
        setIsGameOver(false);
        setCurrentPlayer('red');
        setBoardState(initialBoardState);
    }, [initialBoardState]);

    // Memoized context value to prevent unnecessary re-renders
    const contextValue = useMemo(
        () => ({
            boardState,
            currentPlayer,
            isGameOver,
            winner,
            makeMove,
            resetGame,
        }),
        [boardState, currentPlayer, isGameOver, winner, makeMove, resetGame]
    );

    return <ConnectFourGameContext.Provider value={contextValue}>{props.children}</ConnectFourGameContext.Provider>;
}
