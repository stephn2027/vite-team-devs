/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import gsap from 'gsap';
import { useEffect } from 'react';
import './style.scss';

type ModalProps = {
  setDisplay: any;
  project: {
    name: string;
    solution: string;
    tech: string;
    id: number;
    releaseDate: string;
    imageUrl: string;
    description: string;
  };
};

export default function Modal({ setDisplay, project }: ModalProps) {
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.set('.modal-style', { scale: 0, opacity: 0 });
    tl.to('.modal-style', {
      scale: 1,
      opacity: 1,
      ease: 'back.out(1.1)',
      duration: 0.7,
    });
  });

  return (
    <div
      className="modal-style  fixed inset-x-0 top-0 z-10"
      onClick={() => setDisplay(false)}
    >
      <div className="flex flex-col relative my-6 mx-auto max-w-6xl">
        <div className="modal-style_container border-4 border-secondary rounded-lg shadow-lg bg-neutral outline-none focus:outline-none">
          <button
            className="p-1 ml-auto bg-transparent border-0 opacity-1 float-right leading-none font-semibold"
            onClick={() => setDisplay(false)}
          >
            <span className="modal-close bg-transparent opacity-9 block outline-none">
              ×
            </span>
          </button>
          <div className="modal-header p-5">
            <h3 className="modal-header_name text-3xl font-semibold">
              {project.name}
            </h3>
            <h5 className="modal-header_rDate text-1l p-1">
              {project.releaseDate}
            </h5>
            <img src={project.imageUrl} alt="" className="modal-header_image" />
            <ul className="modal-header_tech">
              <li>Tech Stack: {project.tech}</li>
              <li>Frontend: React/TypeScript</li>
              <li>Backend: Nextjs/TypeScript</li>
            </ul>
          </div>

          <div className="description p-6">
            <p className="description_p my-2 text-slate-300 text-sm leading-relaxed">
              {project.description}
              {project.description}
              {project.description}
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
