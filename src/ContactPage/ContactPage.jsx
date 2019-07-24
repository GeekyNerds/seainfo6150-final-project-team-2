import React from 'react'
import SubscribeForm from './SubscribeForm'
import SimpleMap from './SimpleMap';
import Address from './Address';

const ContactPage = () => {
  return (
    <div>
      <img src="images/newsletterImg.jpg" alt="newsletter image" />
      <SubscribeForm />
      <Address />
      <SimpleMap />
    </div>
  )
}

export default ContactPage;