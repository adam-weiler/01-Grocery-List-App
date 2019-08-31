import React from 'react';
import Category from '../Components/Category';

const CategoryList = ({categories, onClick}) => {
    const categoryElements = categories.map(
        (category, index) => <Category key={index} {...category} onClick={onClick} />
    )

    // console.log('CategoryList.js renders.');

    return (
        <section id="filterCategories">
            <ul className="filters">
                { categoryElements }
            </ul>
            <form id="newCat" className="cat-new" >
                <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
            </form>
        </section>
    );
}

export default CategoryList;
