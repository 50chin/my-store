import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';

import s from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
