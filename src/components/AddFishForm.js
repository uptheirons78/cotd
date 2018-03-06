import React from 'react';

class AddFishForm extends React.Component {
    //go on min 13:00 of video n. 13
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = event => {
        //1. stop the form from submitting
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }
        console.log(fish);
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" placeholder="Name" name="name" ref={this.nameRef}/>
                <input type="text" placeholder="Price" name="price" ref={this.priceRef}/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea placeholder="Desc" name="desc" ref={this.descRef}/>
                <input type="text" placeholder="Image" name="image" ref={this.imageRef}/>
                <button type="Submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;