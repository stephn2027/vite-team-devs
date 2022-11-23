interface StepProps {
  step: {
    id: number;
    title: string;
    description: string;
  };
}

export default function IndividualStep({ step }: StepProps) {
  return (
    <li
      key={step.id}
      className={`step steps-style-list ${
        step.id === 1 ? 'step-secondary' : 'step-neutral'
      }`}
    >
      <div>
        <div className="steps-style_left">
          <h1 className="steps-style_left-title">{step.title}</h1>
          <p className="steps-style_left-explain">{step.description}</p>
        </div>
      </div>
    </li>
  );
}
