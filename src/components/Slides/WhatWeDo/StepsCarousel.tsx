/* eslint-disable react/function-component-definition */
import IndividualStep from './IndividualStep';
import STEPS_TEXT from '../../../assets/constants/steps';

const StepsCarousel: React.FC = () => {
  return (
    <div className="stepsCarousel-style carousel carousel-center p-4 space-x-4 rounded-box mt-3">
      {STEPS_TEXT.map((step) => (
        <div
          className="carouselItem-style carousel-item bg-gray-100 list-none rounded-box"
          id={step.id.toString()}
          key={step.id}
        >
          <IndividualStep key={step.id} step={step} />
        </div>
      ))}
      ;
    </div>
  );
};

export default StepsCarousel;
