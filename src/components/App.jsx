import { Component } from "react"
import { Title } from "./Title/TitlePhone";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  filter: '',
  name: '',
  number: ''
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
        // if(isExist) {
        //   alert(`${name} is already in contacts.`);
        //   return
        // };
      };
    });
  };

  filterContact = e => {
    this.setState({
        filter: e.target.value,
    });
  };


  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      };
    });
  };

  render() {
    const { contacts } = this.state;
    const realItemContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter));

    return (
      <div>
        <Title title="Phonebook" />
        <ContactForm onAdd={this.addContact} />
        <Title title="Contacts" />
        <Filter value={realItemContacts} onFilter={this.filterContact} />
        <ContactList   contacts={contacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  };
}
