import s from './Filter.module.css';
import { changeFilter, getFilter } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const showVisibleContacts = e =>
    dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={showVisibleContacts}
        placeholder="type here"
      />
    </label>
  );
};

export default Filter;
