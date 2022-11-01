import './style.scss';
import Button from '../../Button';

interface ProjectProps {
  project: {
    name: string;
    solution: string;
    country: string;
    tech: string;
    id: number;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="card w-96 shadow-xl project-style">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>Solution: {project.solution}</p>
        <div className="card-actions justify-start">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}
