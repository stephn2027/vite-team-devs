/* eslint-disable react/require-default-props */
import './styles.scss';

export default function Slider({ children }: { children: React.ReactNode }) {
  return (
    <div className="slides">
      <div className="slide">
        <div className="slide__inner">
          <div className="slide__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
