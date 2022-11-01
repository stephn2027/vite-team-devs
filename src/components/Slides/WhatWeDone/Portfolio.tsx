/* eslint-disable react/function-component-definition */
import './style.scss';
import Project from './Project';
import PORTFOLIO_ITEM from '../../../assets/constants/portfolio';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-style">
      {PORTFOLIO_ITEM.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
