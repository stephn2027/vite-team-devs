import MENU_ITEM from '../../constants/menu';

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href="https://learn-tech-tips.blogspot.com/"
          className="btn btn-ghost normal-case text-xl"
        >
          LOGO HERE
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {MENU_ITEM.map(({ name, anchor }) => (
            <li key={anchor}>
              <a href={anchor}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
