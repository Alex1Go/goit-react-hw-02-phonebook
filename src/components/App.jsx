import { Component } from "react"
import { Title } from "./Title/TitlePhone";
import { ContactForm } from "./ContactForm/ContactForm";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  render() {
    return (
      <div>
        <Title title="Phonebook" />
        <ContactForm/>
        <Title title="Contacts"/>
      </div>
    );
  };
}
