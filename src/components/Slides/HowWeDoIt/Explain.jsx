import './style.scss';
import img1 from '/src/altumcode-dMUt0X3f59Q-unsplash.jpg'
import img2 from '/src/christopher-gower-m_HRfLhgABo-unsplash.jpg'

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
          src={img1}
          className="w-full  shadow-2xl content-style_img"
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
