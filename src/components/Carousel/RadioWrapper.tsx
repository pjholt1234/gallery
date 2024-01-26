import Radio from "./Radio";
import {FC} from "react";
interface RadioWrapperProps {
    count: number;
}

const RadioWrapper: FC<RadioWrapperProps> = ({count}) => {
    const radios = [];

    for (let i = 0; i < count; i++) {
        radios.push(<Radio key={i} ownPosition={i + 1}/>);
    }

    return <div className='radio-wrapper'>{radios}</div>;
}

export default RadioWrapper;