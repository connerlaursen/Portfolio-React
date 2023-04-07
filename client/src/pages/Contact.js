import React from 'react'

function Contact() {
  return (
    <div className="contactWrapper">
       <div className="formcarry-container">
      <form action="#" method="POST" className="formcarry-form">

        <input type="text" id="name" name="fullName" placeholder='Name' required />

        <input type="email" id="email" name="email" placeholder='Email Address' required />

       
        <textarea name="message" id="message" cols="30" rows="7" placeholder='Message'></textarea>

        <button type="submit">Send</button>
      </form>
    </div>

    </div>
  )
}

export default Contact