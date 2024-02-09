import {FC, useState} from 'react';
import {usePosition} from "../../hooks/UsePositionContext";

interface CardProps {
    title: string;
    cardPosition: number;
    src: string
}

const Card:FC<CardProps> = ({title, cardPosition, src }) => {
    const [focused, setFocused] = useState(false);

    const {position} = usePosition();

    const getItemStyle = () => {
        const r = position - cardPosition;
        const abs = Math.max(Math.abs(r), r);

        return {
            transform: `rotateY(${-10 * r}deg) translateX(${-300 * r}px)`,
            zIndex: position - abs,
            opacity: getCardOpacity(position, cardPosition)
        };
    };

    const toggleCardFocus = () => {
        if(position != cardPosition) {
            return;
        }
        setFocused(!focused);
    }

    return (
        <div className={`card ${focused ? 'card_focused' : 'item'}`} style={getItemStyle()}>
            <img onClick={() => toggleCardFocus()} src={src} className='button_focus' alt={title} />
        </div>
    )
}

const getCardOpacity = (position: number, cardPosition: number) => {
    const difference = Math.abs(position - cardPosition);

    if(difference === 0) {
        return 1;
    }

    if (difference <= 4 && difference >= 1) {
        return 1 - difference * 0.2;
    }

    return 0;
}

export default Card;