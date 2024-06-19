import clsx from 'clsx';
import s from './Button.module.scss';

export const Button = ({
  children,
  size,
  variant,
  color,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(s.button, className, {
        [s.button_large]: size === 'large',
        [s.button_white]: color === 'white',
        [s.button_fill]: variant === 'fill',
      })}
    >
      {children}
    </button>
  );
};
