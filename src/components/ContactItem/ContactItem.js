import PropTypes from 'prop-types';
import s from 'components/ContactItem/ContactItem.module.css';
function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        X
      </button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
