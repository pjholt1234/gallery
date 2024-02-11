import React, {FC, useState} from 'react';
import MobileCard from "./MobileCard";

interface MobileCardWrapperProps {
    items: Array<{ title: string; body: string; src: string }>;
}

const MobileCardWrapper: FC<MobileCardWrapperProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let touchStartX = 0;

    const cards = items.map((item, index) => (
        <MobileCard key={index} item={item} />
    ));

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX = e.touches[0].clientX;
    };


    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 50 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (deltaX < -50 && currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div
            className="mobileCard__container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ overflowX: 'hidden' }}
        >
            {cards[currentIndex]}
        </div>
    );
};

export default MobileCardWrapper;
