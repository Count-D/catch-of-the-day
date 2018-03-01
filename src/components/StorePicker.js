import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    goToStore(event){
        event.preventDefault();
        //1. Grab the text from the box
        const storeId = this.storeInput.value;
        //2. transition from / to /store/:storeid
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    render(){
        return(
            <form className="store-selector" onSubmit={(e)=> this.goToStore(e)}>
                <h2>Please Enter a Store</h2>
                <input type="text"  placeholder="Store Name" defaultValue={getFunName()}
                 ref={(input)=> {this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}
StorePicker.contextTypes = {
    router: React.PropTypes.object
}
export default StorePicker;