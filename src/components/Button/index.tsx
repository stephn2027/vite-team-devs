import './style.scss';

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <div className="button-style">
      <span>{text}</span>
    </div>
  );
}
