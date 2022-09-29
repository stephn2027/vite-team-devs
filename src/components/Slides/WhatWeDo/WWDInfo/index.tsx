import ContentInfo from './InfoContent';
import ContentSteps from './StepsContent';
import './style.scss';

export default function WWDInfo() {
  return (
    <div className="flex place-items-center wwd-style">
      <div className="wwd-style_content wwd-style_info">
        <ContentInfo />
      </div>

      <div className="wwd-style_content wwd-style_steps">
        <ContentSteps />
      </div>
    </div>
  );
}
