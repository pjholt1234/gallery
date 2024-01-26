import {createContext, useState, ReactNode, Dispatch, SetStateAction, FC, useContext} from 'react';

interface PositionContextProps {
    position: number;
    setPosition: Dispatch<SetStateAction<number>>;
}

const PositionContext = createContext<PositionContextProps | null>(null);

const PositionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [position, setPosition] = useState<number>(1);

    return (
        <PositionContext.Provider value={{ position, setPosition }}>
            {children}
        </PositionContext.Provider>
    );
};

const usePosition = () => {
    const context = useContext(PositionContext);
    if (!context) {
        throw new Error(
            'usePosition must be used within an PositionProvider'
        );
    }
    return context;
};

export { usePosition, PositionProvider };
