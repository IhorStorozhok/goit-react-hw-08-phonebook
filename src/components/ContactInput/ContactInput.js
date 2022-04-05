import React, { useState } from "react";
import s from "../ContactInput/ContactInput.module.css";

import PropTypes from "prop-types";
import {useAddContactMutation } from "redux/contacsApi";



const ContactInput = ({ currentContacts }) => {
  
  

  const [contactAdd] = useAddContactMutation();
 

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleGetName = (evt) => {
    setName(evt.currentTarget.value);
  };

  const handleGetNumber = (evt) => {
    setNumber(evt.currentTarget.value);
  };



  const handleSaveContact = (evt) => {
    evt.preventDefault();
    currentContacts.map((cont) => { return cont.name }).includes(name) ? alert(`contact ${name} has already in your contacts`) :
      
        contactAdd({
          name: name,
          number: number });
    setName("");
    setNumber("");
      
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1>Phonebook</h1>
        <form name="phoneBook" onSubmit={handleSaveContact}>
          <label className={s.inputLabel}>
            Name
            <input
              onChange={handleGetName}
              value={name}
              className={s.contactInput}
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={s.inputLabel}>
            Number
            <input
              onChange={handleGetNumber}
              value={number}
              type="tel"
              className={s.contactInput}
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit" className={s.inputButton}>
            Add contacts
          </button>
        </form>
      </div>
    </section>
  );
};



export default ContactInput;

ContactInput.propTypes = { whenSubmit: PropTypes.func };
