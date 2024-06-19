import s from './Card.module.scss';
import starImg from '../../assets/icons/star.svg';
import { Button } from '../../ui/Button/Button';
import { useCart } from '../../app/providers/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Card = ({ id, img, name, price, oldPrice, rating }) => {
  const { addToCart, product } = useCart();
  const [stateCart, setStateCart] = useState();
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    const findId = product.find((el) => el.id === id);

    setStateCart(findId);
  }, [product, id]);

  return (
    <article className={s.card}>
      <div className={s.card__wrapper}>
        <img className={s.card__img} src={img} alt="img" />
        <div className={s.card__text}>
          <div className={s.card__middle}>
            <p>{name}</p>
            <p className={s.card__price}>{price} ₽</p>
          </div>
          <div className={s.card__bottom}>
            <span>
              <img src={starImg} alt="star" />
              <p className={s.card__rating}>{rating}</p>
            </span>
            {stateCart ? (
              <Button>
                <Link to={'/cart'}>В корзине</Link>
              </Button>
            ) : (
              <Button onClick={() => handleAddToCart({ id, img, name, price })}>
                Купить
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
