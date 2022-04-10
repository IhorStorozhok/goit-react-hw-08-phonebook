import React from "react";
import s from "./ContactList.module.css";

import { useDeleteContactMutation } from "redux/contacsApi";
import { useGetContactsQuery } from "redux/contacsApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Filter from "components/Filter/Filter";


const ContactList = ({}) => {

  const isLogin = useSelector((state)=>{return state.isLogin})
  const [deleteContact, status] = useDeleteContactMutation()
  const { data, isSuccess } = useGetContactsQuery();
  const filterInputValue = useSelector((state) => { return state.filter });
  
  
  const [contacts, setContacts] = useState([]);
  useEffect(() => { setContacts(isSuccess ? [...data] : []) }, [isSuccess, data]);
   
  let filtredContacts = contacts.filter !== "" ? contacts.filter(cont => cont.name.toLowerCase().includes((filterInputValue).toLowerCase())) : contacts;
  

  

 
  
  return (
    contacts.length > 0 ?<>
       <Filter/>
        <div>
          <ul>
            {filtredContacts.map((contact) => {
              return (
                <li className={s.contactListItem} key={contact.id}>
                  <span>{contact.name}:</span>
                  <span> {contact.number}</span>
                  <button
                    className={s.deleteButton}
                    disabled={status.status === 'pending'}
                    type="button"
                    onClick={() => {
                      deleteContact(contact.id).then()
                      setContacts(filtredContacts.filter(el => { return el.id !== contact.id }));
                    }}
                  >
                    {status.status === 'pending' ? 'Deleting...' : "Delete"}
                  </button>
                </li>
              );
            })}
          </ul>
        <span></span>
       
      </div></>
      : <p>Please add contacts</p>
    );
};

export default ContactList;

