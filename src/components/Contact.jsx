import React from 'react';
import './compStyles/Contact.css';

const Contact = () => {
  return (
      <div>
        <h1>Enjoyed the Site? Let us know here.</h1>
        <section class="form1">
    <label>Email:</label>
    <br/>
    <input type ="email" name="user-email" placeholder="name@email.com" />
    </section>
    
    
    
    <section class="form2">
    <label>Comments</label>
    <br/>
    <input type ="text" name="comments" placeholder="Let Us Know :)"/>
    </section>
      </div>
  )
}

export default Contact