import React from 'react';

class GroceryItem extends React.Component {
    state = {
      category: this.props.category,
      quantity: this.props.quantity,
      item: this.props.item
    }

    render () {
      return (
        <li className={this.state.category}>
          <button>-</button>
          <span>{this.state.quantity} {this.state.item}</span>
          <button>+</button>
        </li>
      )
    }    
}

export default GroceryItem;