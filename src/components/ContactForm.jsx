import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './rightContainer.css'


function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

function handleSubmit(event)
{
    event.preventDefault();
}

function saveContact()
{
    const contactUrl = 'https://boolean-uk-api-server.fly.dev/dev-marlin/contact';

      const postContact = async () => {
        const response = await fetch(contactUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              city: city,
              street: street,
              gender: 'Male',
              email: 'rick@sanchez.com',
              jobTitle: 'Scientist',
              latitude: 42,
              longitude: 629,
              favouriteColour: '#0d7f26',
              profileImage: 'https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon',
            })
        });

        const responseData = await response.json();
    }
    postContact();
      setFirstName("");
      setLastName("");
      setCity("");
      setStreet("");
}
    
    const navigate = useNavigate();

  return (
    <div className="rightContainer">
        <form onSubmit={handleSubmit}>
            <h4>Firstname: </h4>
            <input type="text" onChange={(e)=> setFirstName(e.target.value)} value={firstName}></input>

            <h4>Lastname: </h4>
            <input type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName}></input>

            <h4>City: </h4>
            <input type="text" onChange={(e)=> setCity(e.target.value)} value={city}></input>

            <h4>Street: </h4>
            <input type="text" onChange={(e)=> setStreet(e.target.value)} value={street}></input>

            <button type="submit" onClick={()=> {  saveContact(); 
                                                   navigate("/contactlist");

            }}>Save</button>
        </form>
    </div>
  )
}

export default ContactForm