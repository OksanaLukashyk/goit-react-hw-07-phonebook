import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterStore.filter);

  const filterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
};
