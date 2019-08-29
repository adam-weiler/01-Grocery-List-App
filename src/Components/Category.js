import React, { Component } from 'react';

class Category extends Component {

    render() {
        const { value, id } = this.props
        let checked = '';

        if (id == 0) {
            // console.log('id 0')
            checked = 'checked';
        } else {
            // console.log('id not 0')
            checked = ''
        }

        return (
            <li>
                <input type="radio" name="category" value={value} id={`filter${id}`} defaultChecked={checked} />
                <label for={`filter${id}`}>{value}</label>
            </li>
        )
    }
}

export default Category;