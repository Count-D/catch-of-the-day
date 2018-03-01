import React from 'react';

//Change from Stateless to Statefull Component so i can pass this.context.router
    class Header extends React.Component {
        constructor(props){
            super();
            this.aboutUsPage = this.aboutUsPage.bind(this);
        }
        
        aboutUsPage(event){
            event.preventDefault();
           
            //transition from / to /store/:storeid/aboutus
            this.context.router.transitionTo(`/store/${this.storeId}/aboutus`);
            
        }
        render(){
        return(
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                <span className="of">of</span> 
                <span className="the">the</span>
                </span>
                Day
            </h1>
            <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            <br/>   
            <button onClick={(e)=>this.aboutUsPage(e)} className="aboutUs">About Us</button>
        </header>
        );
    
        }
    }
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
    }
Header.propTypes = {
    tagline: React.PropTypes.string.isRequired
}
    

    

export default Header;