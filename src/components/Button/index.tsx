/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import './style.scss';

type ButtonProps = {
  text: string;
  style?: React.CSSProperties | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function Button({ text, style, onClick }: ButtonProps) {
  return (
    <div className="button-style" style={style} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}
