import { createContext } from 'react';
import { ConnectFourGameContextType } from '../types/ConnectFourGameContextType';

export const ConnectFourGameContext = createContext<ConnectFourGameContextType | undefined>(undefined);
