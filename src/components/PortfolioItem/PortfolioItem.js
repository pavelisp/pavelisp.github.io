import "./PortfolioItem.scss";
import sideShape from "../../assets/images/side-shape.svg";

function PortfolioItem({image, tech, demo, github, name, description}) {
  console.log(image);
  return ( 
      <section className="portfolioItem">
        <div className="portfolioItem__image">
        <img src={image} alt={name} className="portfolioItem__thumbnail" />
        <img className="portfolioItem__shape" src={sideShape} alt=""/>
          <div className="portfolioItem__links">
            {demo && <a className="portfolioItem__link" rel="noreferrer" target="_blank" href={demo}>DEMO</a>}
            {github && <a rel="noreferrer" className="portfolioItem__link portfolioItem__link--secondary" target="_blank" href={github}>GITHUB</a>}
          </div>
        </div>
        <div className="portfolioItem__info">
          <h3 className="portfolioItem__title">{ name }</h3>
          <p className="portfolioItem__copy">{description}</p>
          <ul className="portfolioItem__tech">
            {
              tech.map((icon, i) => <li key={i} className="portfolioItem__techItem">{icon}</li>)
            }
          </ul>
        </div>
      </section>
   );
}

export default PortfolioItem;