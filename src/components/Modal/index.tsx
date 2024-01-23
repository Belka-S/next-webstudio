'use client';

import classNames from 'classnames';
import { FC, KeyboardEvent, MouseEvent, ReactNode, useEffect } from 'react';

import s from './Modal.module.scss';
declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<Document>;
  }
}

interface IModalProps {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ className, onClick, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent<Document>) => {
      if ((e as KeyboardEvent<Document>).key === 'Escape') onClick();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && onClick();
  };

  return (
    <div
      className={classNames(s.backdrop, className)}
      onClick={handleBackdropClick}
    >
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export default Modal;
