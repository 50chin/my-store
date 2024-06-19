import { Link } from 'react-router-dom';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <>
      <Link to={'/'}>
        <h1 className={s.logo}>QPICK</h1>
      </Link>
    </>
  );
};
