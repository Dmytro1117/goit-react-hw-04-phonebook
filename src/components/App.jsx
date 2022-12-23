import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

    componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('renewed contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  handlerFromForm = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      num =>
        num.name.toLowerCase() === contact.name.toLowerCase() ||
        num.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));

    // console.log(contact)
    // this.setState( prev => ({contacts: [contact, ...prev.contacts]}) )
    //  console.log(this.state)
  };

  handlerFindContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtrContacts = () => {
    return this.state.contacts.filter(cont =>
      cont.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook:</h1>
        <ContactForm onSendForApp={this.handlerFromForm} />
        <h1>Contacts:</h1>
        <Filter
          text={this.state.filter}
          filterInput={this.handlerFindContact}
        />

        <ContactList
          find={this.filtrContacts()}
          // arrContacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
