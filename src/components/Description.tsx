import {usePosition} from "../hooks/UsePositionContext";
import {FC} from "react";

interface DescriptionProps {
    items: Array<{ title: string; body: string; src: string; }>;
}
const Description: FC<DescriptionProps> = ({items}) => {
    const {position} = usePosition();
    const body = items[position - 1]?.body || '';

    return (
        <p className="description">
            {body}
        </p>
    )
}

export default Description;