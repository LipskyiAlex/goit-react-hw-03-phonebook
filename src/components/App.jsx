import React from 'react';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { MainContainer,MainTitle,SecondaryTitle } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [

    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
     const {contacts} = this.state;
    resetForm();
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      contact: name,
      number: number,
    };
    
    if(contacts.find(contact => contact.contact.toLowerCase()===newContact.contact.toLowerCase())) {
      return Notiflix.Notify.failure(`${newContact.contact} is already in contacts`);
    }
    

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ contact }) =>
    contact.toLowerCase().includes(filter.toLowerCase()));
    return (
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Input onSubmit={this.handleSubmit} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} onChange={this.handleChange} />
        <Contacts
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </MainContainer>
    );
  }
}

export default App;
