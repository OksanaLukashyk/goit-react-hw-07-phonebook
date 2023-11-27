import { createSlice } from '@reduxjs/toolkit';

// Використовуємо саме createAsyncThunk для роботи з запитами Для отримання відфільтрованих контактів, краще за все, використати createSelector . Так наш код в компоненті contactsList буде чистіший, а селектор створений за допомогою createSelector буде мемоізований, тобто який перераховує contacts, коли змінюється значення state.contacts або state.filter, але не тоді, коли зміни відбуваються в інших (незалежних) частинах дерева.
// export const selectVisibleContacts = createSelector(
// [ selectContacts, selectFilter],
//  (contacts, filter) => {
//    return contacts.filter(contact => contact.name.toLowerCase()
//     .includes(filter.toLowerCase()))
//  }

// const contactsDataBase = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
      //   state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
