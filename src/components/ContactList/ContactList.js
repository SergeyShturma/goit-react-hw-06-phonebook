import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contactSlice';
import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const deleteOneContact = id => dispatch(deleteContact(id));

  const visibleContacts = () => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={s.contactList}>
      {visibleContacts().map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={deleteOneContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
