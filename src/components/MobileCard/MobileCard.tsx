import {FC} from "react";

interface MobileCardProps {
    item: { title: string; body: string; src: string; };
}

const MobileCard: FC<MobileCardProps> = ({item}) => {
  return (
    <div className="mobileCard">
      <h2 className="mobileCard__title">{item.title}</h2>
        <div className="mobileCard__img-container">
            <img src={item.src} alt={item.title} className="mobileCard__img"/>
        </div>
        <div className="mobileCard__description">
            {item.body}
        </div>
    </div>
  );
}

export default MobileCard;