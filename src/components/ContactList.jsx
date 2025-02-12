import React from 'react'
import {useContext,useState} from "react"
import {ContactContext} from "../App"
import Contact from './Contact';
import './rightContainer.css';



function ContactList() {
    const {contactList} = useContext(ContactContext);
    const [filteredList, setFilteredList] = useState([]);
    const [filter, setFilter] = useState("");

  return (
    <div className="rightContainer">
        <div>
            <h2>ContactList</h2>
            <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
            <div className="scrollContainer">
                <ul>
                    {
                    contactList.map((contact, index) => {
                        if(contact.firstName.toLowerCase().includes(filter.toLowerCase()))
                            return <li key={index}><Contact contact={contact}></Contact></li>
})
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactList