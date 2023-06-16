
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";

import {initContacts} from "../static/initContacts";
const LS_KEY = 'contacts';

export function App() {

  const [contacts, setContacts] = useState(()=> {
    const contactsJson = localStorage.getItem(LS_KEY);
    return contactsJson ? JSON.parse(contactsJson) : initContacts;
  });
  const [filter, setFilter] = useState('');

  //--- localStorage ----------
  useEffect(()=> {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }


  const addContact = (name, number) => {
    const id = nanoid();
    const newContact = {id, name, number}; 
    let isSameName = false;
    
    contacts.map(contac => {
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
      setContacts(prevState => ([...prevState, newContact]));
    }
  }



  const SearchResultContacts = () => {
    const searchRes = filter.toLowerCase(); 
    const filterContacts = contacts.filter(
      contact => contact.name.toLowerCase().includes(searchRes));
    return filterContacts;
  }



  const deleteContact = (key) => {
    const newList = contacts.filter(contact => contact.id !== key);
    setContacts(newList);
  }


  

    return (
      <div className="Container">

        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact}/>

        <h2>Contacts</h2>
        <Filter searchVal={filter} onSearchSet={handleFilter} />
        
        <ContactList 
          onFilterContacts={SearchResultContacts()}
          contacts={contacts} 
          searchResult={filter}
          onDelete={deleteContact}
        />
      
      </div>
    )
}


// Конец  

