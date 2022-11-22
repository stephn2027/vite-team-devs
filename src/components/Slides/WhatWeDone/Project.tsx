import './style.scss';
import { useState } from 'react';
import Button from '../../Button';
import Modal from '../../Modal';

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
  const [displayModal, setDisplayModal] = useState<boolean>(false);
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
          <Button
            onClick={() => setDisplayModal(!displayModal)}
            text="Learn More"
          />
        </div>
      </div>
      <Modal show={displayModal} setShow={setDisplayModal} project={project} />
    </div>
  );
}
