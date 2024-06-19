import { Section } from '../../components/Section/Section';
import s from './Headphones.module.scss';
import img1 from '../../assets/img/headphones/1.png';
import img2 from '../../assets/img/headphones/2.png';
import img3 from '../../assets/img/headphones/3.png';
import { Card } from '../../components/Card/Card';

const cardObj = [
  {
    id: 1,
    img: img1,
    name: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rating: '4.7',
  },
  {
    id: 2,
    img: img2,
    name: 'Apple EarPods',
    price: 2327,
    oldPrice: '',
    rating: '4.5',
  },
  {
    id: 3,
    img: img3,
    name: 'Apple EarPods',
    price: 2327,
    oldPrice: '',
    rating: '4.5',
  },
  {
    id: 4,
    img: img1,
    name: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: '',
    rating: '4.7',
  },
  {
    id: 5,
    img: img2,
    name: 'Apple EarPods',
    price: 2327,
    oldPrice: '',
    rating: '4.5',
  },
  {
    id: 6,
    img: img3,
    name: 'Apple EarPods',
    price: 2327,
    oldPrice: '',
    rating: '4.5',
  },
];

export const Headphones = () => {
  return (
    <Section className={s.headphones} title="Наушники" id="Наушники">
      {cardObj.map((el) => (
        <Card
          key={el.id}
          id={el.id}
          img={el.img}
          name={el.name}
          price={el.price}
          oldPrice={el.oldPrice}
          rating={el.rating}
        />
      ))}
    </Section>
  );
};
