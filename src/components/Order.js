import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            return (
            <li key={key}>
                Sorry {fish ? fish.name : 'fish'} is not available!
            </li>
            );
        }
        return (
        <li>
            {count} lbs {fish.name} - {formatPrice(count * fish.price)}
        </li>
        );
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((acc, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return acc + (count * fish.price);
            }
            return acc;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {/* return list of items ordered */}
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                {/* return the total amount */}
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;