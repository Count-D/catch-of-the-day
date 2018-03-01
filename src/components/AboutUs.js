import React from 'react';
import Images from './Images';
import ContactForm from './ContactForm';


class AboutUs extends React.Component {
  
    
    render(){
        
        return(
            <div className="abt">
           <h2 className="aboutus">ABOUT US</h2>
            <Images />
            <p>Catch of the Day's open-air seafood market - the pride of the Port of San Diego. The public and chefs will delight in purchasing fresh caught seafood and aquafarmed seaweed direct from their local fishermen and aquafarmers. Sustainable fishing practices, minimal carbon footprints, and local harvesters – Catch of the Day benefits all.</p>
            <br/>
            <h2>CONTACT US</h2>
            <br/>
            <ContactForm />
            </div>
        );
    }
}
export default AboutUs;