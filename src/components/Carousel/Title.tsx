import {FC} from "react";
import {usePosition} from "../../hooks/UsePositionContext";

interface TitleProps {
    items: Array<{ title: string; body: string; src: string; }>
}

const Title: FC<TitleProps> = ({items}) => {
    const {position} = usePosition();

    const getTitle = () => {
        return items[position - 1].title;
    }

    return (
        <div className='titleContainer'>
            <h1 className="titleContainer__title">{getTitle()}</h1>
        </div>
    )
}

export default Title;