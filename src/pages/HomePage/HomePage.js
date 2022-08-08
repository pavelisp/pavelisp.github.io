import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import Testimonials from "../../components/Testimonials/Testimonials";
import './HomePage.scss';

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default HomePage;
