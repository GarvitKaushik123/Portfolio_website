import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfoliio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonial/>
      <Contact></Contact>
    </div>
  );
}

export default App;
