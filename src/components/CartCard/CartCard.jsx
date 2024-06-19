import s from './CartCard.module.scss';
import { DeleteButton } from '../../ui/DeleteButton/DeleteButton';
import { IncrDecrButton } from '../../ui/IncrDecrButton/IncrDecrButton';
import { useState } from 'react';

export const CartCard = ({
  id,
  img,
  name,
  price,
  deleteCartCard,
  setResult,
}) => {
  const [counter, setCounter] = useState(1);
  const [sum, setSum] = useState(price);
  let total = 0;
  setResult(total + sum);

  const handlerDecrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setSum(sum - price);
      total -= sum;
    }
  };

  const handlerIncrementCounter = () => {
    setCounter(counter + 1);
    setSum(sum + price);
    total += sum;
  };

  return (
    <article className={s.cartCard}>
      <div className={s.cartCard__wrapper}>
        <div className={s.cartCard__left}>
          <img className={s.cartCard__img} src={img} alt="img" />
          <span>
            <p className={s.cartCard__name}>{name}</p>
            <p className={s.cartCard__price}>{price}</p>
          </span>
        </div>
        <DeleteButton onClick={() => deleteCartCard(id)} />
      </div>
      <div className={s.cartCard__bottom}>
        <div className={s.cartCard__btn}>
          <IncrDecrButton onClick={() => handlerDecrementCounter()} />
          <p className={s.cartCard__counter}>{counter}</p>
          <IncrDecrButton
            type="increment"
            onClick={() => handlerIncrementCounter()}
          />
        </div>
        <span>{sum} ₽</span>
      </div>
    </article>
  );
};
