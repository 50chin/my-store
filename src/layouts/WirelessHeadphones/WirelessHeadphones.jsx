import { Section } from '../../components/Section/Section';
import s from './WirelessHeadphones.module.scss';
import img1 from '../../assets/img/wireless/1.png';
import img2 from '../../assets/img/wireless/2.png';
import img3 from '../../assets/img/wireless/3.png';
import { Card } from '../../components/Card/Card';

const cardObj = [
  {
    id: 7,
    img: img1,
    name: 'Apple AirPods',
    price: 9527,
    oldPrice: '',
    rating: '4.7',
  },
  {
    id: 8,
    img: img2,
    name: 'GERLAX GH-04',
    price: 6527,
    oldPrice: '',
    rating: '4.7',
  },
  {
    id: 9,
    img: img3,
    name: 'BOROFONE BO4',
    price: 7527,
    oldPrice: '',
    rating: '4.7',
  },
];

export const WirelessHeadphones = () => {
  return (
    <Section
      className={s.wireless}
      title="Беспроводные наушники"
      id="Беспроводные наушники"
    >
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
