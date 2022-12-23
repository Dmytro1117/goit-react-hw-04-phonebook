import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.module.css';

export class ContactForm extends Component { 
  state = {
  number: '',
  name: '',
}

  handlerChange = (e) => {
    const {name, value} = e.currentTarget
    // console.log(e.currentTarget.value)
    this.setState({[name]:value})
  }
  
  handlerSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.onSendForApp(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({number: '',  name: ''})
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <input
            placeholder="Number"
            onChange={this.handlerChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          

          <input
            placeholder="Name"
            onChange={this.handlerChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type='submit'>Add contact</button>
        </form>
      </>

    );
  }
}


ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
