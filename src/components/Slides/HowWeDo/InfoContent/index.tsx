import './style.scss';

export default function ContentInfo() {
  return (
    <div className="hero content-style">
      <div className="content-style_container">
        <div>
          <h1 className="text-5xl font-bold content-style_text">What We Do</h1>
          <p className="py-6 content-style_subtext">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
    </div>
  );
}
