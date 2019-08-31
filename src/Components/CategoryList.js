import React from 'react';
import Category from '../Components/Category';

const CategoryList = ({categories, onClick}) => {
        // state = {
        //   category: this.props.category,
        //   quantity: this.props.quantity,
        //   item: this.props.item
        // }

    // initialCategories = [
    //     { value: 'all', id: 0 },
    //     { value: 'meat', id: 1 },
    //     { value: 'produce', id: 2 },
    //     { value: 'dairy', id: 3 },
    //     { value: 'bakery', id: 4 },
    //     // 
    // ]

    // state = {
    //     categories: this.initialCategories
    // }

    // render () {
        const categoryElements = categories.map(
            (category, index) => <Category key={index} {...category} onClick={onClick} />
        )
        console.log('CategoryList.js renders.');
        console.log(categories)
        console.log(onClick)

        return (
            <section id="filterCategories">
                <ul className="filters">
                    { categoryElements }
                </ul>
                <form id="newCat" className="cat-new" >
                    <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
                </form>
            </section>
        )
    // }    
}

export default CategoryList;