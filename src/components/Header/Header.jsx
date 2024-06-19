import { Container } from '../../layouts/Container/Container';
import s from './Header.module.scss';
import heartImg from '../../assets/icons/heart.svg';
import cartImg from '../../assets/icons/cart.svg';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <Logo />
          <div className={s.header__right}>
            <img src={heartImg} alt="heart" />
            <Link to={'/cart'}>
              <img src={cartImg} alt="cart" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
