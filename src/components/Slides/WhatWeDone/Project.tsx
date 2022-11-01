import './style.scss';
import Button from '../../Button';

interface ProjectProps {
  project: {
    name: string;
    solution: string;
    tech: string;
    id: number;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="card w-96 shadow-xl project-style">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p className="mt-2">
          Solution: <span>{project.solution}</span>
        </p>
        <p className="mt-2">
          Tech Stack: <span>{project.tech}</span>
        </p>
        <div className="card-actions justify-start mt-8">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}
