import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = (event) => {
        //1. Stop the form from submitting
        event.preventDefault();
        //2. get the text from the input
        const storeName = this.myInput.value.value;
        //3. change page to /store/whatever-inside-input
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
               {/* a comment */}
                <h2>Please Enter a Store</h2>
                <input
                    ref={this.myInput} 
                    type="text" 
                    required 
                    placeholder="Store name" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store ></button>
            </form>
        )
    }
}

export default StorePicker;