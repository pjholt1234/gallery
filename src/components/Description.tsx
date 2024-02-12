import {usePosition} from "../hooks/UsePositionContext";
import {FC, useEffect, useState} from "react";

interface DescriptionProps {
    items: Array<{ title: string; body: string; src: string; }>;
}
const Description: FC<DescriptionProps> = ({items}) => {
    const {position} = usePosition();
    const body = items[position - 1]?.body || '';

    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    }, [position]);

    return (
        <p className={`description ${isAnimating ? 'description__slideIn' : ''}`}>
            {body}
        </p>
    )
}

export default Description;