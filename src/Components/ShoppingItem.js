import React, { Component } from 'react';

class ShoppingItem extends Component {

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
        )
        // console.log(this.state.quantity)
    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState(
                (prevState) => (
                    {
                        quantity: prevState.quantity - 1
                    }
                )
            ) //Stretch Goal: If quantity = 0 then remove item from list.
            // console.log(this.state.quantity)
        }
    }

    render() {
        const { category, item } = this.props

        return (
            <li className={category}>
                <button onClick={ this.decrementQuantity }>-</button>
                <span>{this.state.quantity} {item}</span>
                <button onClick={ this.incrementQuantity }>+</button>
            </li>
        ) 
    }


}

export default ShoppingItem;