import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();

  const addContactData = contactData => {
    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        contactData.name.toLowerCase().trim()
    );

    if (hasDuplicates) {
      Notify.warning(
        `Contact with name '${contactData.name}' has already been added!`,
        { timeout: 6000 }
      );
      return;
    }

    dispatch(addContact(contactData));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      name,
      number,
      id: nanoid(),
    };

    addContactData(contactData);
    setName('');
    setNumber('');
    evt.target.reset();
  };

  const handleInputChange = evt => {
    const value = evt.target.value;

    const name = evt.target.name;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(([' \-][a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії ])?[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]*)*$"
          title="Only Cyrillic/Latin letters, also name may contain hyphen, apostrophe or space character"
          required
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          onChange={handleInputChange}
          value={number}
          pattern="[+380]{4}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="Only digits, format +380-XX-XXX-XX-XX"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
