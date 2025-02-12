import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {ContactContext} from "../App"
import './rightContainer.css'


function ViewContact() {
    const {contactList, setContactList} = useContext(ContactContext);
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    
    function removeContact()
    {
        const contactUrl = 'https://boolean-uk-api-server.fly.dev/dev-marlin/contact/'+contact.id;

        const deleteContact = async () => {
            const response = await fetch(contactUrl, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                }
            });

            if(response.ok)
            {
                const updatePeople = await fetch('https://boolean-uk-api-server.fly.dev/dev-marlin/contact/').then(res => res.json());
                setContactList(updatePeople);
            }
        }
        deleteContact();
        setContact(null);
    }


useEffect(() => {
    if (contactList && id) {
      setContact(contactList.find((contact) => contact.id == id));
    }
  }, [contactList, id]);

  if (!contact) return <p>Loading...</p>

  return (
    <div className="rightContainer">
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <img src={contact.profileImage}></img>
            <p>City: {contact.city}</p>
            <p>Street: {contact.street}</p>
            <p>Gender: {contact.gender}</p>
            <p>Email: {contact.email}</p>
            <p>Job Title: {contact.jobTitle}</p>
            <div className="">
                <p>Favorite Colour</p>
                <div style={{backgroundColor: contact.favouriteColour, width: "50px", height: "50px"}}></div>
            </div>
        </div>
        <iframe src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&output=embed`}  width="600" height="450" ></iframe>

        <button className="myButtons" onClick={()=>{removeContact(); navigate("/contactlist");}}>Delete</button>
        <button className="myButtons" onClick={()=> navigate("/contact/update/"+id)}>Edit</button>
    </div>
  )
}

export default ViewContact