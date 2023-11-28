import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsStore.items;
export const selectIsLoading = state => state.contactsStore.isLoading;
export const selectError = state => state.contactsStore.error;
export const selectFilter = state => state.filterStore.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  }
);
