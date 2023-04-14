import IndividualStep from './IndividualStep';
import STEPS_TEXT from '../../../assets/constants/steps';
import './style.scss';

export default function Steps() {
  return (
    <div className="steps steps-style">
      <ul className="steps steps-vertical">
        {STEPS_TEXT.map((step) => (
          <IndividualStep key={step.id} step={step} />
        ))}
      </ul>
    </div>
  );
}
