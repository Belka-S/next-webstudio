import classNames from 'classnames';

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
      className={classNames('iconSvg', `${svgId}Svg`, className)}
      width={width}
      height={height}
    >
      <use href={`./svg/sprite.svg#${svgId}`} />
    </svg>
  );
};

export default IconSvg;
