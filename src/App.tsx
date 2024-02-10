import './App.css'
import {PositionProvider} from "./hooks/UsePositionContext";
import Title from "./components/Title";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Description";
import {items} from "./data/items";
import MobileCardWrapper from "./components/MobileCard/MobileCardWrapper";

const App = () => {
    return (
      <div className='gridContainer'>
          <PositionProvider>
              <div className="infoWrapper">
                  <Title items={items} />
                  <Description items={items} />
              </div>
            <Carousel items={items}/>
            <MobileCardWrapper items={items} />
          </PositionProvider>
      </div>
    )
}

export default App
