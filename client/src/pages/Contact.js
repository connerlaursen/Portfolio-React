import React from 'react'

function Contact() {
  return (
    <div className="contactWrapper">
       <div className="formcarry-container">
      <form action="#" method="POST" class="formcarry-form">
        <label for="name">Name</label>
        <input type="text" id="name" name="fullName" required />

        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="7"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>

    </div>
  )
}

export default Contact