import SLIDES from '../../assets/constants/slides';
import './style.scss';

export default function Navigation() {
  return (
    <nav className="frame__nav">
      {SLIDES.map(({ name, id }) => (
        <button type="button" className="frame__nav-button unbutton" key={id}>
          {name}
        </button>
      ))}
    </nav>
  );
}
