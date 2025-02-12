import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ViewContact from './components/ViewContact';

export const ContactContext = createContext();

function App() {
    const [contactList, setContactList] = useState([]);
    const contactUrl = 'https://boolean-uk-api-server.fly.dev/dev-marlin/contact';

    useEffect(()=>
    {
        const fetchContacts = async () => {
            const response = await fetch(contactUrl);
            const jsonData = await response.json();
            setContactList(jsonData);
        }
        fetchContacts();
    },[contactList]);

    return (
        <div className="homecontainer">
            <nav className = "sidemenu">
                <ul>
                    <li><Link to="/contactlist">Contact list</Link></li>
                    <li><Link to="/createcontact">Create contact</Link></li>
                </ul>
            </nav>

        <ContactContext.Provider value={{contactList, setContactList}}>
            <Routes>
                    <Route
                        path="/contactlist"
                        element={<ContactList></ContactList>}/>

                    <Route
                        path="/createcontact"
                        element={<ContactForm></ContactForm>}/>
                    
                        <Route
                            path="/contact/:id"
                            element={<ViewContact></ViewContact>}/>
            </Routes>
        </ContactContext.Provider>
        </div>
    );
}

export default App;
