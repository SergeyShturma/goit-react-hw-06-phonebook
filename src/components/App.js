import s from 'components/App.module.css';
import { useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { getContacts } from 'redux/contactSlice';
import Notification from 'components/Notification/Notification';
import NotificationGood from 'components/NotificationGood/NotificationGood';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={s.main}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <>
        {contacts.length ? (
          <>
            <ContactList />
            <NotificationGood />
          </>
        ) : (
          <Notification />
        )}
      </>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
