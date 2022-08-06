import "./PortfolioItem.scss";

function PortfolioItem({portfolioImage, techIcons, title, description}) {
  return ( 
      <section className="portfolioItem">
        <div className="portfolioItem__image">
        <img src="" alt="" className="portfolioItem__thumbnail" />
        <a className="portfolioItem__link" href="http://">DEMO</a>
        <a className="portfolioItem__link portfolioItem__link--secondary" href="http://">GITHUB</a>
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