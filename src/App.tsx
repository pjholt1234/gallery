import './App.css'
import {PositionProvider} from "./hooks/UsePositionContext";
import Title from "./components/Carousel/Title";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Carousel/Description";

const App = () => {
    const items = [
        {
            title: "Stripes",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus rhoncus aliquam. Vestibulum " +
                "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget lorem magna. ",
            src: "http://placekitten.com/g/400/400"
        },
        {
            title: "Soggs",
            body: "In hac habitasse platea dictumst. Phasellus odio est, varius vitae leo in, rutrum convallis eros. " +
                "Integer scelerisque arcu id molestie maximus.",
            src: "http://placekitten.com/g/500/500"
        },
        {
            title: "Coco",
            body: "Duis laoreet vulputate molestie. Donec auctor libero purus, a efficitur diam convallis fermentum.",
            src: "http://placekitten.com/g/600/600"
        },
        {
            title: "Buttons",
            body: "Donec pharetra, leo in sodales varius, enim mauris commodo sapien, eu rutrum ligula tortor a urna.",
            src: "http://placekitten.com/g/700/700"
        },
        {
            title: "Kate",
            body: "Vestibulum rutrum elit arcu, non dignissim nisi scelerisque pretium. Aliquam accumsan tortor est, quis " +
                "malesuada diam varius sit amet.",
            src: "http://placekitten.com/g/800/800"
        },
        {
            title: "Sooty",
            body: "Nullam dapibus dolor sit amet ex semper aliquet. Nunc euismod pellentesque arcu, ac volutpat justo " +
                "consequat at. Aenean cursus libero non accumsan ultrices. ",
            src: "http://placekitten.com/g/900/900"
        },

    ];

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
