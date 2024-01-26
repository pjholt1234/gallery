import {FC} from "react";
import {usePosition} from "../../hooks/UsePositionContext";

interface RadioProps {
    ownPosition: number;
}

const Radio: FC<RadioProps> = ({ownPosition}) => {
    const { position, setPosition } = usePosition();

    return (
        <input
            type="radio"
            onChange={() => setPosition(ownPosition)}
            checked={position === ownPosition}
        />
    )
}

export default Radio;