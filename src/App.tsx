import './App.css'
import CarouselWrapper from "./components/Carousel/CarouselWrapper";

const App = () => {
  return (
      <div className='grid-container'>
          <div className='titleContainer'>
              <h1 className="titleContainer__title">Carousel Test Site</h1>
          </div>
          <CarouselWrapper />
      </div>
  )
}

export default App
