import React from 'react'
import {useContext} from "react"
import {ContactContext} from "../App"
import Contact from './Contact';
import './rightContainer.css';



function ContactList() {
    const {contactList} = useContext(ContactContext);
  return (
    <div className="rightContainer">
        <h2>ContactList</h2>
        <div className="scrollContainer">
            <ul>
                {
                contactList.map((contact, index) => (
                    <li key={index}><Contact contact={contact}></Contact></li>
                ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ContactList