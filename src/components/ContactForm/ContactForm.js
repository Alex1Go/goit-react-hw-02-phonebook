import { Formik, Field, Form } from 'formik';

export const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                onSubmit={async (values) => {}}
            >
                <Form>
                    <label>Name
                        <Field
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required placeholder="Jane Snow" />
                    </label>
                    <label>Number
                        <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="XXX-XX-XX-XXX"
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    );
};