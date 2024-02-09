import './App.css'
import {PositionProvider} from "./hooks/UsePositionContext";
import Title from "./components/Carousel/Title";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Carousel/Description";
import {items} from "./data/items";

const App = () => {
    return (
      <div className='grid-container'>
          <PositionProvider>
              <div>
                  <Title items={items} />
                  <Description items={items} />
              </div>
            <Carousel items={items}/>
          </PositionProvider>
      </div>
    )
}

export default App
