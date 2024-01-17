import classNames from 'classnames';

import s from './IconSvg.module.scss';

type IconSvgProps = {
  svgId: string;
  width?: number;
  height?: number;
  className?: string;
};

const IconSvg = ({
  svgId,
  width = 20,
  height = 20,
  className = '',
}: IconSvgProps) => {
  return (
    <svg
      className={classNames(s.iconSvg, className)}
      width={width}
      height={height}
    >
      <use href={`./sprite.svg#${svgId}`} />
    </svg>
  );
};

export default IconSvg;
