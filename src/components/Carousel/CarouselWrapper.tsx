import {PositionProvider} from "../../hooks/UsePositionContext";
import Carousel from "./Carousel";

const CarouselWrapper = () => {
    const items = [
        {
            title: "Title 1",
            body: "Body 1"
        },
        {
            title: "Title 2",
            body: "Body 2"
        },
        {
            title: "Title 3",
            body: "Body 3"
        },
        {
            title: "Title 4",
            body: "Body 4"
        },
        {
            title: "Title 5",
            body: "Body 5"
        },
        {
            title: "Title 5",
            body: "Body 5"
        },

    ]


    return (
        <PositionProvider>
            <Carousel items={items}/>
        </PositionProvider>
    )
}

export default CarouselWrapper;