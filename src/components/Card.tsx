import { ReactNode, FC } from 'react';


interface CardProps {
    zIndex?: number;
    offset?: number;
    children?: ReactNode;
}


const Card:FC<CardProps> = ({zIndex = 1, offset = 0, children}) => {
    const marginLeft = offset * 50;
    const marginBottom = offset * 10;
    return (
        <div className="card" style={{ zIndex: zIndex, marginLeft: `${marginLeft}px`, marginBottom: `${marginBottom}px`}}>
            <h2>Card</h2>
            {children}
        </div>
    )
}

export default Card;