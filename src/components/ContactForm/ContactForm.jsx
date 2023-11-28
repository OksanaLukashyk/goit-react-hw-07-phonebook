import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { name, number } = form.elements;
    const contactData = {
      name: name.value,
      phone: number.value,
      id: nanoid(),
    };

    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        contactData.name.toLowerCase().trim()
    );

    if (hasDuplicates) {
      Notify.warning(`Contact with name '${name}' has already been added!`, {
        timeout: 6000,
      });
      return;
    }

    dispatch(addContact(contactData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
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
