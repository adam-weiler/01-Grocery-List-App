import React, { Component } from 'react';
import ItemForm from './Components/ItemForm';
import CategoryList from './Components/CategoryList';
import ShoppingList from './Components/ShoppingList';

class App extends Component {

  addItem = (item) => {
    console.log('additem')
    this.setState(
    //   (prevState) => ({ })
      this.items = { category: 'meat', name: 'Steaks' }
    )

    console.log(this.items)
    
  }

  render() {

    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>

        <ItemForm onSubmit={ this.addItem.bind(this) } />

        <CategoryList />

        <ShoppingList />

      </main>
    );
  }

}

export default App;
