import PortfolioItem from "../PortfolioItem/PortfolioItem";
import './Portfolio.scss';

function Portfolio() {
  return ( <>
  <h2 id="work" class="portfolio__title">Projects</h2>
  <PortfolioItem /> 
  <PortfolioItem /> 
  <PortfolioItem /> 
  <PortfolioItem /> 
  </>);
}

export default Portfolio;