import { Component } from "react"
import { Title } from "./Title/TitlePhone";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
onDeleteContact() {}
  render() {
    return (
      <div>
        <Title title="Phonebook" />
        <ContactForm/>
        <Title title="Contacts" />
        <Filter />
        <ContactList/>
      </div>
    );
  };
}
