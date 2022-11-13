/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import { useState } from 'react';
import Modal from '../Modal';
import './style.scss';

type ModalButtonProps = {
  text: string;
  style?: React.CSSProperties | undefined;
  project:
    | {
        name: string;
        solution: string;
        tech: string;
        id: number;
        releaseDate: string;
        imageUrl: string;
        description: string;
      }
    | undefined;
};

export default function ModalButton({
  text,
  style,
  project,
}: ModalButtonProps) {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <div
        className="button-style"
        style={style}
        onClick={() => setDisplayModal(true)}
      >
        <span>{text}</span>
      </div>
      {displayModal ? (
        <Modal setDisplay={setDisplayModal} project={project} />
      ) : null}
    </>
  );
}
