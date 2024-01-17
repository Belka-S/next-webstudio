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
  width = 16,
  height = 16,
  className = '',
}: IconSvgProps) => {
  return (
    <svg
      className={classNames(s.iconSvg, `${svgId}Svg`, className)}
      width={width}
      height={height}
    >
      <use href={`/icons/sprite.svg#${svgId}`} />
    </svg>
  );
};

export default IconSvg;
