import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
import Services from "./components/Services";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="">
      <Header />
      <div className="aspect-[2.5] w-full h-full">
        <ImageSlider />
      </div>
      <About />
      <Services />
      <Mission />
      <Contact />
    </div>
  );
}

export default App;
