import './App.css';
import hoylake from "./assets/hoylake.jpg";
import oxton from "./assets/oxton.jpg";
import wirralwater from "./assets/wirralwater.jpeg";
import Picture from "./components/Picture";
import Slider from "./components/Slider";
import Nav from './components/Nav';


const navLinks = [
  { url: '/', title: 'Home' },
  { url: 'https://www.visitwirral.com/things-to-do/attractions/beaches', title: 'Beaches' },
  { url: 'https://www.visitwirral.com/explore/towns-and-villages', title: 'Villages' },
];

function App() {
  return (
    <div className="App">
      <Nav navLinks={navLinks} />
      <Picture imageSrc={wirralwater} />
      <Slider imageSrc={hoylake}
         title={"Breathtaking Beaches"}
          subtitle={"Merseyside many not be the first place that comes to mind when you think of beaches, but perhaps it should be!"}
      />
      <Slider imageSrc={oxton} 
        title={"Picture Perfect Villages"}
        subtitle={"Oxton is just one of the beautiful villages on the Wirral where you can grab a cup of coffee or browse the independent stores."}
        flipped={true}
      />
    </div>
  );
}

export default App;
