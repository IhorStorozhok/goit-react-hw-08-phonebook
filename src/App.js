import React from "react";



import "./App.css";
import ContactInput from "./components/ContactInput/ContactInput";
import ContactList from "./components/ContactList/ContactsList";
import { useGetContactsQuery } from "redux/contacsApi";
import { useSelector } from "react-redux";



import Filter from "./components/Filter/Filter";




const Phonebook = () => {

  const { data, isSuccess } = useGetContactsQuery();
  const contacts = isSuccess ? [...data] : [];
  const filterInputValue = useSelector((state) => { return state.filter });
  const filtredContacts = contacts.filter!==""?contacts.filter(cont=>cont.name.toLowerCase().includes((filterInputValue).toLowerCase())):contacts




  
  
 
 
  
  return (
    <>
      <ContactInput currentContacts={contacts} />
      {isSuccess&&data.length === 0 ? (
        <p>Please add contacts</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter  />
          <ContactList contacts={filtredContacts} />

       
        </>
      )}
    </>
  );
}
;



export default Phonebook;
