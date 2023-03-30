import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, getContacts } from 'redux/contactSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };

    if (!name) {
      toast(`We need a name.`);
      return;
    }

    if (!number) {
      toast(`We need a number.`);
      return;
    }

    if (contacts.find(c => c.name === name)) {
      toast(`${name} is already in contacts.`);
      reset();
      return;
    }

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="type here"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="type here"
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
