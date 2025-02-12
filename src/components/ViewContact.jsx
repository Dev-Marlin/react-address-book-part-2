import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ContactContext} from "../App"


function ViewContact() {
const {contactList} = useContext(ContactContext);
const [contact, setContact] = useState(null);
const { id } = useParams();

useEffect(() => {
    if (contactList && id) {
      setContact(contactList.find((contact) => contact.id == id));
    }
  }, [contactList, id]);

  if (!contact) return <p>Loading...</p>

  return (
    <div className="rightContainer">
        <h2>{contact.firstName} {contact.lastName}</h2>
        City: {contact.city}
        <br></br>
        Street: {contact.street}
    </div>
  )
}

export default ViewContact