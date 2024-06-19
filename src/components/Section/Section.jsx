import clsx from 'clsx';
import s from './Section.module.scss';
import { Container } from '../../layouts/Container/Container';

export const Section = ({ className, title, children, id }) => {
  return (
    <section className={clsx(s.section, className)} id={id}>
      <Container>
        <h3 className={s.section__title}>{title}</h3>
        <div className={s.section__wrapper}>{children}</div>
      </Container>
    </section>
  );
};
