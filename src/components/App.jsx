import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="glass">
      {isLoading && !error && <Loader />}

      <h1>Phonebook</h1>
      <ContactForm />
      {error &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
