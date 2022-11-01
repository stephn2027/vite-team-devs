/* eslint-disable react/require-default-props */
import './style.scss';

type ButtonProps = {
  text: string;
  style?: React.CSSProperties | undefined;
};

export default function Button({ text, style }: ButtonProps) {
  return (
    <div className="button-style" style={style}>
      <span>{text}</span>
    </div>
  );
}
