import React from 'react';
import ShoppingItem from '../Components/ShoppingItem';

class ShoppingList extends React.Component {
    state = {
    //   category: this.props.category,
      quantity: 1,
    //   item: this.props.item
    }

    //Increment ()

    //Passes in with quantity 0.

    render () {
        return (
            <ul id="shoppingList" className="shoppinglist">
                <ShoppingItem category={'meat'} item={'Steaks'} />
                <ShoppingItem category={'produce'} item={'Apples'} />
                <ShoppingItem category={'dairy'} item={'Milk (1L, 2%)'} />
                <ShoppingItem category={'bakery'} item={'Baguettes'} />
            </ul>
        )
    }    
}

export default ShoppingList;