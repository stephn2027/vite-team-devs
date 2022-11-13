import './style.scss';
import ModalButton from '../../ModalButton';

interface ProjectProps {
  project: {
    name: string;
    solution: string;
    tech: string;
    id: number;
    releaseDate: string;
    imageUrl: string;
    description: string;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div
      className="card shadow-xl project-style
    rounded-none"
    >
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p className="mt-2 text-white">
          Solution: <span>{project.solution}</span>
        </p>
        <p className="mt-2 text-white">
          Tech Stack: <span>{project.tech}</span>
        </p>
        <div className="card-actions justify-start mt-8">
          <ModalButton text="Learn More" project={project} />
        </div>
      </div>
    </div>
  );
}
