import React from "react";
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css";


export class ContactForm extends React.Component {

  state = {
    name: '',
    number: '',
  }


  newContact = (event) => {
    event.preventDefault();
    const { onAddContact } = this.props;
    const { name, number } = event.target.elements;
    onAddContact(name.value, number.value);
    event.target.reset();
  }


  render() {
    return (
      <form onSubmit={this.newContact} className={css.FormContact}>
          <label className={css.LabelContact}> Name
            <input
              className={css.InputContact}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
          </label>
         
          <label className={css.LabelContact}>Number
            <input
              className={css.InputContact}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={css.BtnContact} type="submit">Add contact</button>
        </form>
    )
  }
}


ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}
