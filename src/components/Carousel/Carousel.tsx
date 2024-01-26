import Card from "./Card";
import {usePosition} from "../../hooks/UsePositionContext";
import {FC} from "react";
import RadioWrapper from "./RadioWrapper";
interface CarouselProps {
    items: Array<{ title: string; body: string }>;
}

const Carousel: FC<CarouselProps> = ({items}) => {
    const {position} = usePosition();

    return (
        <div className='carousel'>
            <main id="carousel" style={{ '--position': position }}>
                {items.map((item, index) => {
                    return <Card key={index} title={item.title} body={item.body} cardPosition={index + 1}/>
                })}
            </main>
            <RadioWrapper count={items.length} />
        </div>
    );
};

export default Carousel;
