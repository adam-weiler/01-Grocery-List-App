import React from 'react';
import Category from '../Components/Category';

class CategoryList extends React.Component {
    // state = {
    //   category: this.props.category,
    //   quantity: this.props.quantity,
    //   item: this.props.item
    // }

    render () {
        return (
            <section id="filterCategories">
                <ul className="filters">
                    {/* <Category category={'meat'} quantity={3} item={'Steaks'} /> */}
                {/* <li><input type="radio" name="category" value="all" id="filter0" checked /><label for="filter0">all</label></li>
                <li><input type="radio" name="category" value="meat" id="filter1" /><label for="filter1">meat</label></li>
                <li><input type="radio" name="category" value="prod" id="filter2" /><label for="filter2">prod</label></li>
                <li><input type="radio" name="category" value="dairy" id="filter3" /><label for="filter3">dairy</label></li>
                <li><input type="radio" name="category" value="bakery" id="filter4" /><label for="filter4">bakery</label></li> */}
                </ul>
                <form id="newCat" className="cat-new">
                    <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
                </form>
            </section>
        )
    }    
}

export default CategoryList;