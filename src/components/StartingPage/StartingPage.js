import React from "react";
import s from "../ContactInput/ContactInput.module.css";
import st from "../StartingPage/StartingPage.module.css";
import ContentContainer from "components/ContentContainer/ContentContainer";
import { Link } from "react-router-dom";


const StartingPage = () => {
    return (<>
        <h2 className={st.hero}>You can add or delete your contacts as you wish</h2>
        <ContentContainer>
            
        <section className={s.section}>
      <div className={s.container}>
        <h1>Phonebook</h1>
        <form name="phoneBook" >
          <label className={s.inputLabel}>
            Name
            <input
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
              type="tel"
              className={s.contactInput}
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

         <Link to={'login'}> <button type="submit" className={s.inputButton}>
            Add contacts
          </button></Link>
        </form>
      </div>
    </section></ContentContainer></>) }

export default StartingPage


