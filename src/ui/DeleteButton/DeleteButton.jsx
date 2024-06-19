import s from './DeleteButton.module.scss';
import deleteIcon from '../../assets/icons/delete.svg';

export const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={deleteIcon} alt="delete" />
    </button>
  );
};
