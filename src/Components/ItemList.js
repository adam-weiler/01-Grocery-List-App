import React from 'react';
import Item from './Item';

const ItemList = ({items, filter}) => {
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
        console.log(items)

        // const limitItems = items.filter(function (item, index) {
        //     return item.category === 'meat';
        // });
        // console.log(limitItems)


        // let restriction = 'meat';
        let restriction = '';
        let listItems = items;

        if (filter) {
            listItems = listItems.filter(
                (item, index) => item.category === filter
                )
            console.log(listItems)
        }


        listItems = listItems.map(
                (item, index) => <Item key={index} {...item} />
            )
        console.log(listItems)
        
        console.log('ItemList.js renders');

        return (
            <ul id="shoppingList" className="shoppinglist">
                { listItems }
            </ul>
        )
    // }    
}

export default ItemList;