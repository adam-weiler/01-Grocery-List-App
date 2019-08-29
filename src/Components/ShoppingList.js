import React from 'react';
import ShoppingItem from '../Components/ShoppingItem';

class ShoppingList extends React.Component {
    // state = {
    //   category: this.props.category,
    //   quantity: this.props.quantity,
    //   item: this.props.item
    // }

    render () {
        return (
            <ul id="shoppingList" className="shoppinglist">
                <ShoppingItem category={'meat'} quantity={3} item={'Steaks'} />
                <ShoppingItem category={'prod'} quantity={4} item={'Apples'} />
                <ShoppingItem category={'dairy'} quantity={1} item={'Milk (1L, 2%)'} />
                <ShoppingItem category={'bakery'} quantity={2} item={'Baguettes'} />
            </ul>
        )
    }    
}

export default ShoppingList;