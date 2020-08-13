import React from 'react'

import './Contact.scss'
import Navigation from '../components/Navigation/Navigation'
import CTAButton from '../ui-bops/CTAButton'

const Contact = () => {

  return(
    <container className='contact-container'>
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='contact-info'>
        <section className='contact-social'>
          <h2>Feel free to reach out through social media, at the links below, </h2>
          <a href="https://github.com/SamanthaEgge"><i class="fab fa-github"></i></a>
          <a href="https://twitter.com/SamanthaEgge"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/samantha-egge/"><i class="fab fa-linkedin"></i></a>
        </section>
        <section className='contact-resume'>
          <h2>or checkout my resume,</h2>
          <CTAButton label={'View'} size={'medium'} color={'primary'} /><CTAButton label={'Download'} size={'medium'} color={'primary'} />
        </section>
        <section className='contact-form'>
          <h2>or send me an <a href="mailto:samantha.c.egge@gmail.com">email directly!</a></h2>
        </section>
      </div>
    </container>
  )
}

export default Contact;