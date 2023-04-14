import './style.scss';

export default function Explain() {
  return (
    <div className="content-style">
      <div>
        <h1 className="font-bold content-style-title">How We Do It</h1>
        <p className="content-style-sub">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>

      <div className="columns-2">
        <img
          src="https://placeimg.com/260/400/arch"
          className="w-full  shadow-2xl content-style_img"
          alt=""
        />
        <img
          src="https://placeimg.com/260/400/arch"
          className="w-full shadow-2xl content-style_img"
          alt=""
        />
      </div>
    </div>
  );
}
