import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import About from "./components/about";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Services from "./components/services";
import Statistics from "./components/statistics";
import Testimonial from "./components/testimonial";


const LandingPage = () => {
  return <div>
    <Hero />
    <Services />
    <About />
    <Collection />
    <Statistics />
    <Testimonial />
  
  </div>;

}

export default LandingPage;