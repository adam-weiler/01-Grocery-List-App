import React, { Component } from 'react';
import ShoppingItem from '../Components/ShoppingItem';

class ShoppingList extends Component {

    initialItems = [
        { category: 'meat', name: 'Steaks' },
        { category: 'produce', name: 'Apples' },
        { category: 'dairy', name: 'Milk (1L, 2%)' },
        { category: 'bakery', name: 'Baguettes' },
    ]

    state = {
        items: this.initialItems
    }

    render () {
        const listItems = this.state.items.map(
            (item, index) => <ShoppingItem key={index} {...item} />
        )
        // console.log(listItems)

        return (
            <ul id="shoppingList" className="shoppinglist">
                { listItems }
            </ul>
        )
    }    
}

export default ShoppingList;