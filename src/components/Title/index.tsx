import classNames from 'classnames';
import { createElement, FC, PropsWithChildren } from 'react';

import { FontWeight, Heading } from '@/components/Title/types';

import styles from './Title.module.scss';

interface ITitleProps extends PropsWithChildren {
  element: Heading;
  size?: 'large';
  type?: 'body' | 'lead';
  className?: string;
  fontWeight: FontWeight;
}

export const Title: FC<ITitleProps> = props => {
  const { element, size, type, className = '', fontWeight, children } = props;

  const el = element === ('h7' || 'h8') ? 'h6' : element;

  return createElement(
    el,
    {
      className: classNames(
        className,
        styles[fontWeight],
        size && styles[size],
        styles[element],
        type && styles[type],
      ),
    },
    children,
  );
};
