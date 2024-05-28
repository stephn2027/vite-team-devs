import './style.scss';

export default function Info() {
  return (
    <div className="content-style">
      <div>
        <h1 className="font-bold content-style-title">What We Do</h1>
        <p className="content-style-sub">
          Welcome to TeamDevs—where innovation meets excellence. We specialize
          in web, mobile, and software engineering, empowering businesses
          through cutting-edge technology.
          <br />
          From concept to deployment, we're your partner every step of the way.
          Let's build something extraordinary together.
        </p>
      </div>

      <div className="columns-2">
        <img
          src="/src/altumcode-dMUt0X3f59Q-unsplash.jpg"
          className="w-full shadow-2xl content-style_img"
          alt=""
        />
        <img
          src="/src/christopher-gower-m_HRfLhgABo-unsplash.jpg"
          className="w-full shadow-2xl content-style_img"
          alt=""
        />
      </div>
    </div>
  );
}
