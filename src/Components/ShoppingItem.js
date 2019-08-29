import React, { Component } from 'react';

class ShoppingItem extends Component {

    state = {
        quantity: 1
    }

    incrementQuantity = () => {
        // console.log('hey')
        this.setState(
            (prevState) => (
                {
                    quantity: prevState.quantity + 1
                }
            )
        )
        // console.log(this.state.quantity)
    }

    render() {
        const { category, item } = this.props

        return (
            <li className={category}>
                <button>-</button>
                <span>{this.state.quantity} {item}</span>
                <button onClick={ this.incrementQuantity }>+</button>
            </li>
        ) 
    }


}

export default ShoppingItem;