import {useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import './rightContainer.css'
import { ContactContext } from '../App';



function ContactForm() {
    const {contactList, setContactList} = useContext(ContactContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [favouriteColour, setFavouriteColour] = useState('');
    const [profileImage, setProfileImage] = useState('');

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
              gender: gender,
              email: email,
              jobTitle: jobTitle,
              latitude: latitude,
              longitude: longitude,
              favouriteColour: favouriteColour,
              profileImage: profileImage,
            })
        });
        setContactList([...contactList,{              
            firstName: firstName,
            lastName: lastName,
            city: city,
            street: street,
            gender: gender,
            email: email,
            jobTitle: jobTitle,
            latitude: latitude,
            longitude: longitude,
            favouriteColour: favouriteColour,
            profileImage: profileImage,}]);

        if(response.ok)
            {
                const updatePeople = await fetch('https://boolean-uk-api-server.fly.dev/dev-marlin/contact/').then(res => res.json());
                setContactList(updatePeople);
            }
    }
    postContact();
      setFirstName("");
      setLastName("");
      setCity("");
      setStreet("");
      setGender("");
      setEmail("");
      setJobTitle("");
      setLatitude("");
      setLongitude("");
      setFavouriteColour("");
      setProfileImage("");
}
    
    const navigate = useNavigate();

  return (
    <div className="rightContainer">
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <h4>Firstname: </h4>
                <input type="text" onChange={(e)=> setFirstName(e.target.value)} value={firstName}></input>

                <h4>Lastname: </h4>
                <input type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName}></input>

                <h4>City: </h4>
                <input type="text" onChange={(e)=> setCity(e.target.value)} value={city}></input>

                <h4>Street: </h4>
                <input type="text" onChange={(e)=> setStreet(e.target.value)} value={street}></input>

                <h4>Gender: </h4>
                <input type="text" onChange={(e)=> setGender(e.target.value)} value={gender}></input>

                <h4>Email: </h4>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}></input>
            </div>

            <div>
                <h4>Jobtitle: </h4>
                <input type="text" onChange={(e)=> setJobTitle(e.target.value)} value={jobTitle}></input>

                <h4>Latitude: </h4>
                <input type="number" onChange={(e)=> setLatitude(Number(e.target.value))} value={latitude}></input>

                <h4>Longitude: </h4>
                <input type="number" onChange={(e)=> setLongitude(Number(e.target.value))} value={longitude}></input>

                <h4>Favourite colour: </h4>
                <input type="text" onChange={(e)=> setFavouriteColour(e.target.value)} value={favouriteColour}></input>

                <h4>Profileimage: </h4>
                <input type="text" onChange={(e)=> setProfileImage(e.target.value)} value={profileImage}></input>

                <br></br>
                <br></br>
                <button type="submit" onClick={()=> {  saveContact(); 
                                                    navigate("/contactlist");

                }}>Save</button>
            </div>

        </form>
    </div>
  )
}

export default ContactForm