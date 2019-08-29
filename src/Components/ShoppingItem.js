import React from 'react';

const ShoppingItem = ({category, quantity, item}) => {
    return (
        <li className={category}>
            <button>-</button>
            <span>{quantity} {item}</span>
            <button>+</button>
        </li>
    ) 
}

export default ShoppingItem;