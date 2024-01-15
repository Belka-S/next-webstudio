import classNames from 'classnames';
import { FC } from 'react';

import s from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <span className={s.logo}>
      Web<span className={className}>Studio</span>
    </span>
  );
};

export default Logo;
