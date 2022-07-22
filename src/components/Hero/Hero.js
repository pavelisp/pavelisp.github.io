import "./Hero.scss";

import logoIcon from "../../assets/images/pavelisp_logo_icon.svg";
import wordMark from "../../assets/images/pavelisp_logo_wordmark.svg";


function Hero() {
  return ( 
    <div className="hero__wrapper">
      <div className="hero">
        <img className="hero__icon" src={logoIcon} alt=""/>
        <div className="hero__text">
        <img className="hero__wordmark" src={wordMark} alt=""/>
        <h2 className="hero__copy">Hello and welcome! My name is Pavel 
  and I’m a web developer, designer and 
  a constant explorer of hobbies.</h2>
        </div>
      </div> 
    </div>
  );
}

export default Hero;