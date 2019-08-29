import React from 'react';

const Category = ({}) => {
    return (
        <li>
            <input type="radio" name="category" value="bakery" id="filter4" />
            <label for="filter4">bakery</label>
        </li>

        // <li className={this.state.category}>
        //   <button>-</button>
        //   <span>{this.state.quantity} {this.state.item}</span>
        //   <button>+</button>
        // </li>
    )  
}

export default Category;