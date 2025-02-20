import { Token } from './ConnectFourTokenType';

export interface ConnectFourGameContextType {
    isGameOver: boolean;
    winner: Token | null;
    currentPlayer: Token;
    boardState: Token[][];

    makeMove: (column: number) => void;
    resetGame: () => void;
}
