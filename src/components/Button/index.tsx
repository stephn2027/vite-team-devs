import './style.scss';

type ButtonProps = {
  text: string;
  style?: React.CSSProperties | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function Button({ text, style, onClick }: ButtonProps) {
  return (
    <div
      className="button-style"
      style={style}
      onClick={onClick}
      role="button"
      aria-hidden="true"
    >
      <span>{text}</span>
    </div>
  );
}
const styles = {
  backgroundColor: '',
};
Button.defaultProps = {
  style: styles,
  onClick: () => null,
};
