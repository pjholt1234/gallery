import Card from "./Card";
import {usePosition} from "../../hooks/UsePositionContext";
import {FC} from "react";
import RadioWrapper from "./RadioWrapper";
interface CarouselProps {
    items: Array<{ title: string; body: string }>;
}

const Carousel: FC<CarouselProps> = ({items}) => {
    const {position, setPosition} = usePosition();

    const handlePrevClick = () => {
        if(position === 1) {
            return;
        }
        setPosition(position - 1);
    };

    const handleNextClick = () => {
        if(position === items.length) {
            return;
        }

        setPosition(position + 1);
    };

    return (
        <div className='carousel'>
            {position > 1 ? <div className="clickable-area clickable-area_left" onClick={handlePrevClick}></div> : null}
            <main id="carousel" style={{ '--position': position }}>
                {items.map((item, index) => {
                    return <Card key={index} title={item.title} body={item.body} cardPosition={index + 1}/>
                })}
            </main>
            {position < items.length ? <div className="clickable-area clickable-area_right" onClick={handleNextClick}></div> : null}

            <RadioWrapper count={items.length} />
        </div>
    );
};

export default Carousel;
