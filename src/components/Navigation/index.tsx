import MENU_ITEM from '../../assets/constants/menu';
import './style.scss';

export default function Navigation() {
  return (
    <nav className="frame__nav">
      {MENU_ITEM.map(({ name, id }) => (
        <button type="button" className="frame__nav-button unbutton" key={id}>
          {name}
        </button>
      ))}
    </nav>
  );
}
