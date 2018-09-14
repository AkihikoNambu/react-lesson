import React from 'react'
import Lessons from './Lessons'
import ContactForm from './ContactForm'

export default class Main extends React.Component {
  render() {
    return(
      <div className='main'>
        <div className='copy-container'>
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>プログラミングの世界へようこそ</h2>
        </div>
        <div className='contents'>
          <h3 className='section-title'>学べるレッスン</h3>
          <Lessons />
        </div>
        <div className='contact-form'>
          <h3 className='section-title'>お問い合わせ</h3>
          <ContactForm />
        </div>
      </div>
    )
  }
}
