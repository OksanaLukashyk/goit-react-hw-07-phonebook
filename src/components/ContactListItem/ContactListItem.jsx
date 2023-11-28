import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem} key={id}>
      <p>
        <span className={css.contactName}>{name}</span>: {phone}
      </p>
      <button
        className={css.deleteContactBtn}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
