import STEPS_TEXT from '../../../assets/constants/steps';
import './style.scss';

export default function Steps() {
  return (
    <div className="steps steps-style">
      <ul className="steps steps-vertical">
        {STEPS_TEXT.map(({ id, title, description }) => (
          <li
            key={id}
            className={`step steps-style-list ${
              id === 1 ? 'step-secondary' : 'step-neutral'
            }`}
          >
            <div>
              <div className="steps-style_left">
                <h1 className="steps-style_left-title">{title}</h1>
                <p className="steps-style_left-explain">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
