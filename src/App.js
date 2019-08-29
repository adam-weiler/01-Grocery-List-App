import React, { Component } from 'react';
import ItemForm from './Components/ItemForm';
import CategoryList from './Components/CategoryList';
import ShoppingList from './Components/ShoppingList';

class App extends Component {

  addItem = (event) => {
    const newItem = event;

    this.setState(
      // this.items = item
    )

    console.log('additem');
    console.log(newItem)
  }

  render() {

    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>

        <ItemForm onSubmit={ this.addItem.bind(this) } ref={this.value} />



        <CategoryList />

        <ShoppingList />

      </main>
    );
  }

}

export default App;
