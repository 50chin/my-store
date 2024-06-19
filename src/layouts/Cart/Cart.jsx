import { useState } from 'react';
import { useCart } from '../../app/providers/CartContext';
import { CartCard } from '../../components/CartCard/CartCard';
import { Button } from '../../ui/Button/Button';
import { Container } from '../Container/Container';

import s from './Cart.module.scss';

export const Cart = () => {
  const { product, deleteCartCard } = useCart();
  const [result, setResult] = useState();

  return (
    <section className={s.cart}>
      <Container>
        <h3 className={s.cart__title}>Корзина</h3>
        <div className={s.cart__wrapper}>
          <div className={s.cart__cards}>
            {product.map((el) => (
              <CartCard
                key={el.id}
                id={el.id}
                img={el.img}
                name={el.name}
                price={el.price}
                deleteCartCard={deleteCartCard}
                setResult={setResult}
              />
            ))}
          </div>
          <div className={s.cart__right}>
            <div className={s.cart__result}>
              <p>ИТОГО</p>
              <p>₽ {result ? result : 0}</p>
            </div>
            <Button
              size="large"
              variant="fill"
              color="white"
              className={s.cart__btn}
            >
              Перейти к оформлению
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
