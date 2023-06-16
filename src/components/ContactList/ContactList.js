
import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";


export function ContactList ({onFilterContacts, onDelete}) {
 
  return(
    <ul className={css.ContactList}>
      {onFilterContacts.map(contact=> {
        return <ContactItem key={contact.id} contactItem={contact} onDeleteItem={onDelete}/>
      })}
    </ul>
  )
}


ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onFilterContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
}