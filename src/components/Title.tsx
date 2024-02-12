import { FC, useEffect, useState } from "react";
import { usePosition } from "../hooks/UsePositionContext";

interface TitleProps {
    items: Array<{ title: string; body: string; src: string; }>;
}

const Title: FC<TitleProps> = ({ items }) => {
    const { position } = usePosition();
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    }, [position]);

    return (
        <div className="titleContainer">
            <h1 className={`title ${isAnimating ? 'title__slideIn' : ''}`}>{items[position - 1].title}</h1>
        </div>
    );
};

export default Title;
