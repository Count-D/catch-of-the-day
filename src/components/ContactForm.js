import React from 'react';


class ContactForm extends React.Component {
  
    contactInfo(e){
        e.preventDefault();
        this.contact.reset();
    }
    
    render(){
        
        return(
            <form ref={(input)=> this.contact = input} className="contact-form" onSubmit={(e)=> this.info(e)}>
            <ul className="form-style">
            <li><label>Full Name</label></li>
            <input ref={(input)=> this.fname = input} type="text" className="fname" placeholder="First Name"/>
            <input ref={(input)=> this.lname = input} type="text" className="lname" placeholder="Last Name"/>
            
            <li><label>City & State</label></li>
            <input ref={(input)=> this.city = input} type="text" className="city" placeholder="City"/>
            <input ref={(input)=> this.state = input} type="text" className="state" placeholder="State"/>
            
            <li><label for="email">E-Mail</label></li>
            <input ref={(input)=> this.email = input} type="text" className="email" placeholder="E-Mail"/>
            
            <li><label for="desc">Message</label></li>
            <textarea ref={(input)=> this.desc = input} placeholder="Your Message"></textarea>
            <li><button type="submit">Submit</button></li>
            </ul>
            </form>
        );
    }
}
export default ContactForm;