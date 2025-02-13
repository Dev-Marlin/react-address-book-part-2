import {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './rightContainer.css'
import { ContactContext } from '../App';


function UpdateContactForm() {
    const {contactList, setContactList} = useContext(ContactContext);
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (contactList && id) {
          setContact(contactList.find((contact) => contact.id == id));
        }
      }, [contactList,id]);
    


function handleSubmit(event)
{
    event.preventDefault();
}

function editContact()
{
    const contactUrl = 'https://boolean-uk-api-server.fly.dev/dev-marlin/contact/'+id;
    console.log("Update contact");
      const updateContact = async () => {
        const response = await fetch(contactUrl, {
            method: 'PuT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        });

        if(response.ok)
        {
            const updatePeople = await fetch('https://boolean-uk-api-server.fly.dev/dev-marlin/contact/').then(res => res.json());
            setContactList(updatePeople);
        }
    }
    updateContact();
}

    if (!contact) return <p>Loading...</p>

  return (
    <div className="rightContainer">
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <h4>Firstname: </h4>
                <input type="text" value={contact.firstName} onChange={(e)=> setContact({...contact, firstName: e.target.value})}></input>

                <h4>Lastname: </h4>
                <input type="text" onChange={(e)=> setContact({...contact, lastName: e.target.value})} value={contact.lastName}></input>

                <h4>City: </h4>
                <input type="text" value={contact.city} onChange={(e)=> setContact({...contact, city: e.target.value})}></input>

                <h4>Street: </h4>
                <input type="text" value={contact.street} onChange={(e)=> setContact({...contact, street: e.target.value})}></input>

                <h4>Gender: </h4>
                <input type="text" value={contact.gender} onChange={(e)=> setContact({...contact, gender: e.target.value})}></input>

                <h4>Email: </h4>
                <input type="text" value={contact.email} onChange={(e)=> setContact({...contact, email: e.target.value})}></input>
            </div>

            <div>
                <h4>Jobtitle: </h4>
                <input type="text" value={contact.jobTitle} onChange={(e)=> setContact({...contact, jobTitle: e.target.value})}></input>

                <h4>Latitude: </h4>
                <input type="text" value={contact.latitude} onChange={(e)=> setContact({...contact, latitude: e.target.value})}></input>

                <h4>Longitude: </h4>
                <input type="text" value={contact.longitude} onChange={(e)=> setContact({...contact, longitude: e.target.value})}></input>

                <h4>Favourite colour: </h4>
                <input type="text" value={contact.favouriteColour} onChange={(e)=> setContact({...contact, favouriteColour: e.target.value})}></input>

                <h4>Profileimage: </h4>
                <input type="text" value={contact.profileImage} onChange={(e)=> setContact({...contact, profileImage: e.target.value})}></input>

                <br></br>
                <br></br>
                <button type="submit" onClick={()=> {  editContact(); 
                                                    navigate("/contactlist");

                }}>Save</button>
            </div>

        </form>
    </div>
  )
}

export default UpdateContactForm