import React, { useReducer } from "react";
import { v1 as uuid } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Adam Birgenheier",
        email: "adam@gmail.com",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 2,
        name: "Kevin C",
        email: "kevin@gmail.com",
        phone: "111-111-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Sue D",
        email: "sue@gmail.com",
        phone: "111-111-3333",
        type: "personal",
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //   Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //   Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //   Set Current
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //   Clear Current
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //   Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //   Filter Contact
  //   Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
