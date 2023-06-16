
import React from "react";
// npm i nanoid
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";



export class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }




  //--- localStorage ----------

  componentDidMount() {
    const contactsJson = localStorage.getItem('contacts');

    if (contactsJson) {
      const parseContacts = JSON.parse(contactsJson);
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextLength = prevState.contacts.length;
    const currentLength = this.state.contacts.length;

    if (currentLength !== nextLength) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

  }

  //------ localStorage --------



  handleFilter = (event) => {
    this.setState({filter: event.target.value,});
  }


  checkName = (name) => {
    let isSameName = false;
    this.state.contacts.map(contac => {
      if(contac.name.toLowerCase() === name.toLowerCase()) {
        isSameName = true;
        return isSameName;
      }
      return isSameName;
    });
    return isSameName;  
  }


  addContact = (name, number) => {
    const id = nanoid();
    const newContact = {id, name, number}; 
    let isSameName = false;
    
    this.state.contacts.map(contac => {
      if(contac.name.toLowerCase() === name.toLowerCase()) {
        isSameName = true;
        return isSameName;
      }
      return isSameName;
    });
    
    if(isSameName) {
      alert(`${name} is already in contacs`);
    }
    else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        }
      });
    }
  }



  SearchResultContacts = () => {
    const searchRes = this.state.filter.toLowerCase(); 
    const filterContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(searchRes));
    return filterContacts;
  }



  deleteContact = (key) => {
    const newList = this.state.contacts.filter(contact => contact.id !== key);
    this.setState({contacts: newList});
  }




  


  render() {
    return (
      <div className="Container">

        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact}/>

        <h2>Contacts</h2>
        <Filter searchVal={this.state.filter} onSearchSet={this.handleFilter} />
        
        <ContactList 
          onFilterContacts={this.SearchResultContacts()}
          contacts={this.state.contacts} 
          searchResult={this.state.filter}
          onDelete={this.deleteContact}
        />
      
      </div>
    )
  }
}


// Конец  
