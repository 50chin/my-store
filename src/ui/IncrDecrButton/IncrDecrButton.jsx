import s from './IncrDecrButton.module.scss';
import decrIcon from '../../assets/icons/decrement.svg';
import incrIcon from '../../assets/icons/increment.svg';

export const IncrDecrButton = ({ type, onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      <img src={type === 'increment' ? incrIcon : decrIcon} alt="" />
    </button>
  );
};
