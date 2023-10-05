import React,{ useEffect} from "react";

import ContactFilter from "./ContactFilter/ContactFilter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import { useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { fetchContacts } from "redux/operations";


export const App = () => {
 const contacts = useSelector(getContacts) ;
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',       
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        width: 400
      }}
    >
      <h2 
        style={{color: '#fff'}}>Phonebook</h2>
      <ContactForm/>
      <ContactFilter />
      <ContactList contacts={contacts} />     
    </div>
  );
};
