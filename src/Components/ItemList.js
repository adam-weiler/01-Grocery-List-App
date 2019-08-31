import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
// console.log(items)
        // initialItems = [
        //     { category: 'meat', name: 'Steaks' },
        //     { category: 'produce', name: 'Apples' },
        //     { category: 'dairy', name: 'Milk (1L, 2%)' },
        //     { category: 'bakery', name: 'Baguettes' },
        //     this.props,
        //     this.props.dataFromParent
        // ]

    // state = {
    //     items: [this.props]
    // }

    // render () {
        const listItems = items.map(
            (item, index) => <Item key={index} {...item} />
        )
        // console.log(listItems)
        console.log('ItemList.js');

        return (
            <ul id="shoppingList" className="shoppinglist">
                { listItems }
            </ul>
        )
    // }    
}

export default ItemList;