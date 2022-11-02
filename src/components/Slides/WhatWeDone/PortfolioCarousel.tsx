/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import './style.scss';
import Project from './Project';
import PORTFOLIO_ITEM from '../../../assets/constants/portfolio';

const PortfolioCarousel: React.FC = () => {
  return (
    <>
      <div className="portfolioCarousel-style carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mt-3">
        {PORTFOLIO_ITEM.map((project) => (
          <div
            className="carousel-item"
            id={project.id.toString()}
            key={project.id}
          >
            <Project key={project.id} project={project} />
          </div>
        ))}
      </div>
      {/* <div className="flex w-full justify-center">
        {PORTFOLIO_ITEM.map((item) => (
          <div key={item.id} className="flex mt-4 mr-2">
            <a href={`#${item.id.toString()}`} className="btn btn-xs">
              {item.id}
            </a>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default PortfolioCarousel;
