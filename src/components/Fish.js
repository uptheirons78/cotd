import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        const { image, name, price, desc, status } = this.props.details; //ES6 !!!
        const isAvailable = status === 'available'; //a Boolean related to the Fish button
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                {/* simple ternary operator to change text if Fish is available or not  */}
                {/* anything is related to the const isAvailable  */}
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    { isAvailable ? 'Add To Cart' : 'Sold Out!' }
                </button>
            </li>
        )
    }
}

export default Fish;