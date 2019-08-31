import React from 'react';

const Category = ({value, id, onClick}) => {

    const handleClick = (event) => {  // When user clicks on Category, shows only Items in that Category.
        if (event.target.value != 'all') {  // If radio button is not "All", pass along value as a filter.
            onClick(event.target.value);
        } else {  // Else radio button is "All", reset filter to empty.
            onClick('');
        }
    }

    let checked = '';

    if (id == 0) {
        checked = 'checked';
    } else {
        checked = ''
    }

    // console.log('Category.js renders.');

    return (
        <li>
            <input type="radio" name="category" value={value} id={`filter${id}`} defaultChecked={checked} onClick={handleClick} />
            <label for={`filter${id}`}>{value}</label>
        </li>
    );
}

export default Category;
