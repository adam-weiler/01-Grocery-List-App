import React from 'react';
import Item from './Item';

const ItemList = ({items, categoryFilter}) => {
    let listItems = items;

    if (categoryFilter) {  // If user has clicked on a categoryFilter, list is filtered down.
        listItems = listItems.filter(
            (item, index) => item.category === categoryFilter
            );
    }

    listItems = listItems.map(
        (item, index) => <Item key={index} {...item} />
    );
    
    // console.log('ItemList.js renders');

    return (
        <ul id="shoppingList" className="shoppinglist">
            { listItems }
        </ul>
    );
}

export default ItemList;
