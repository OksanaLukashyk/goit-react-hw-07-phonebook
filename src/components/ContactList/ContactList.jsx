import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          phone={contact.phone}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ul>
  );
};
