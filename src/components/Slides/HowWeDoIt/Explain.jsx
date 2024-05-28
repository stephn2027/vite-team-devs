import './style.scss';

export default function Explain() {
  return (
    <div className="content-style">
      <div>
        <h1 className="font-bold content-style-title">How We Do It</h1>
        <p className="content-style-sub">
        At TeamDevs, we excel in collaborative and innovative development. Understanding our clients' needs is paramount, guiding us to exceed expectations. We establish clear goals, leveraging cutting-edge tech and best practices to craft scalable solutions.
        <br />
         Communication is central. We maintain open channels for client input. With our agile approach and passion for excellence, we're not just developers but partners in your success, turning ideas into reality, one line of code at a time. 
        </p>
      </div>

      <div className="columns-2">
        <img
          src="/src/altumcode-dMUt0X3f59Q-unsplash.jpg"
          className="w-full  shadow-2xl content-style_img"
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
