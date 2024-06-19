import { Container } from '../../layouts/Container/Container';
import { Logo } from '../Logo/Logo';
import s from './Footer.module.scss';
import vkImg from '../../assets/icons/vk.svg';
import telegramImg from '../../assets/icons/telegram.svg';
import whatsappImg from '../../assets/icons/whatsapp.svg';
import langImg from '../../assets/icons/lang.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__wrapper}>
          <Logo />
          <div className={s.footer__center}>
            <ul className={s.footer__lists}>
              <li className={s.footer__list}>
                <a href="#" target="_blank">
                  Избранное
                </a>
              </li>
              <li className={s.footer__list}>
                <Link to={'/cart'}>Корзина</Link>
              </li>
              <li className={s.footer__list}>
                <a href="#" target="_blank">
                  Контакты
                </a>
              </li>
            </ul>
            <ul className={s.footer__lists}>
              <li className={s.footer__list}>
                <a href="#" target="_blank">
                  Условия сервиса
                </a>
              </li>
              <li className={s.footer__lang}>
                <img src={langImg} alt="lang" />
                <button>Рус</button>
                <button>Eng</button>
              </li>
            </ul>
          </div>
          <div className={s.footer__right}>
            <ul className={s.footer__social}>
              <li>
                <a href="">
                  <img src={vkImg} alt="vk" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={telegramImg} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={whatsappImg} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
