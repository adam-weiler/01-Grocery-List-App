import React from 'react';

const Category = ({value, id, onClick}) => {

    const handleClick = (event) => {  // When user clicks on Category, shows only Items in that Category.
        console.log(event.target.value);

        if (event.target.value != 'all') {  // If radio button is not "All", pass along it's value.
            onClick(event.target.value);
        } else {  // Else radio button is "All", reset to empty.
            onClick('');
        }
    }

    // render() {
        // const { value, id } = this.props
        let checked = '';

        if (id == 0) {
            // console.log('id 0')
            checked = 'checked';
        } else {
            // console.log('id not 0')
            checked = ''
        }

        console.log('Category.js renders.');

        return (
            <li>
                <input type="radio" name="category" value={value} id={`filter${id}`} defaultChecked={checked} onClick={handleClick} />
                <label for={`filter${id}`}>{value}</label>
            </li>
        )
    // }
}

export default Category;