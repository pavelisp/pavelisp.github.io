import "./PortfolioItem.scss";
import sideShape from "../../assets/images/side-shape.svg";

function PortfolioItem({portfolioImage, techIcons, title, description}) {
  return ( 
      <section className="portfolioItem">
        <div className="portfolioItem__image">
        <img className="portfolioItem__shape" src={sideShape} alt=""/>
        <img src="" alt="" className="portfolioItem__thumbnail" />
        <div className="portfolioItem__button">
          <a className="portfolioItem__link" href="http://">DEMO</a>
          <span className="portfolioItem__link--background"></span>
        </div>
        <div className="portfolioItem__button portfolioItem__button--secondary">
          <a className="portfolioItem__link portfolioItem__link--secondary" href="http://">GITHUB</a>
          <span className="portfolioItem__link--background"></span>
        </div>  
        </div>
        <div className="portfolioItem__info">
          <h3 className="portfolioItem__title">Coffee Dir</h3>
          <p className="portfolioItem__copy">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque, totam, enim labore quaerat sed adipisci ea ex error eligendi debitis tempore blanditiis iure? Pariatur soluta voluptatibus hic fuga totam?</p>
          <ul className="portfolioItem__techList">
            <li className="portfolioItem__techItem"><img src="" alt="ICON" /></li>
            <li className="portfolioItem__techItem"><img src="" alt="ICON" /></li>
            <li className="portfolioItem__techItem"><img src="" alt="ICON" /></li>
            <li className="portfolioItem__techItem"><img src="" alt="ICON" /></li>
          </ul>
        </div>
      </section>
   );
}

export default PortfolioItem;