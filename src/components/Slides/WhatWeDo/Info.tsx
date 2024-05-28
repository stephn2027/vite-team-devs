import img1 from '/src/altumcode-dMUt0X3f59Q-unsplash.jpg'
import img2 from '/src/christopher-gower-m_HRfLhgABo-unsplash.jpg'
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
          src={img1}
          className="w-full shadow-2xl content-style_img"
          alt=""
        />
        <img
          src={img2}
          className="w-full shadow-2xl content-style_img"
          alt=""
        />
      </div>
    </div>
  );
}
