/* eslint-disable react/require-default-props */
import './styles.scss';

export default function SlideContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="slide">
      <div className="slide__inner">
        <div className="slide__content">{children}</div>
      </div>
    </div>
  );
}
