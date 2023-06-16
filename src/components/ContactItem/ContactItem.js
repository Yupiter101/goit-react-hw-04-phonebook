
import PropTypes from 'prop-types';
import css from "./ContactItem.module.css";


export function ContactItem({contactItem, onDeleteItem}) {
  const {id, name, number} = contactItem;
  return (
    <li className={css.ContactItem}>
        {name}: 
        <span>{number}</span>
        <button 
          type="button"
          onClick={()=> onDeleteItem(id)}
        >button</button>
    </li>
  )
}


ContactItem.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  contactItem: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  
}
