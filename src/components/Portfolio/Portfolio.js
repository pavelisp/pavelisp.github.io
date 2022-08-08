import PortfolioItem from "../PortfolioItem/PortfolioItem";
import './Portfolio.scss';
import portfolio from '../../assets/data/portfolio.js';

function Portfolio() {
  return ( <>
  <h2 id="work" class="portfolio__title">Projects</h2>
  {
    portfolio.map(item => <PortfolioItem {...item} />)
  }
  </>);
}

export default Portfolio;