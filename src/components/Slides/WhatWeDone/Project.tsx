import './style.scss';
import { useContext } from 'react';
import Button from '../../Button';
import Modal from '../../Modal';
import { ThemeContextType } from '../../../@types/theme';
import { ThemeContext } from '../../../context/themeContext';

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
  const { setScrollState } = useContext(ThemeContext) as ThemeContextType;
  const handleModalOpen = () => {
    setScrollState(true);
  };
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
          <Button onClick={() => handleModalOpen()} text="Learn More" />
        </div>
      </div>
      <Modal project={project} />
    </div>
  );
}
