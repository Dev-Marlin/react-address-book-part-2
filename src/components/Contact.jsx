import React from 'react'
import { Link } from 'react-router-dom'

function Contact({contact}) {
  return (
    <div className="contact">
        <Link className="contactLink" to={"/contact/"+ contact.id}>{contact.firstName} {contact.lastName}</Link>
    </div>
  )
}

export default Contact