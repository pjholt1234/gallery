import './App.css'
import {PositionProvider} from "./hooks/UsePositionContext";
import Title from "./components/Title";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Description";
import {items} from "./data/items";
import MobileCard from "./components/MobileCard/MobileCard";

const App = () => {
    return (
      <div className='gridContainer'>
          <PositionProvider>
              <div className="infoWrapper">
                  <Title items={items} />
                  <Description items={items} />
              </div>
            <Carousel items={items}/>
            <MobileCard item={items[0]}/>
          </PositionProvider>
      </div>
    )
}

export default App
