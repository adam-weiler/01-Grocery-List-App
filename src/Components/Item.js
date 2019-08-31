import React, { Component } from 'react';

class Item extends Component {

    state = {
        quantity: 1
    }

    incrementQuantity = () => {
        this.setState(
            (prevState) => (
                {
                    quantity: prevState.quantity + 1
                }
            )
        );
    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState(
                (prevState) => (
                    {
                        quantity: prevState.quantity - 1
                    }
                )
            ); //Stretch Goal: If quantity = 0 then remove item from list.
        }
    }

    render() {
        const { category, name } = this.props;

        // console.log('Item.js renders');

        return (
            <li className={category}>
                <button onClick={ this.decrementQuantity }>-</button>
                <span>{this.state.quantity} {name}</span>
                <button onClick={ this.incrementQuantity }>+</button>
            </li>
        );
    }
}

export default Item;
