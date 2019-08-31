import React, { Component } from 'react';
import ItemForm from './Components/ItemForm';
import CategoryList from './Components/CategoryList';
import ShoppingList from './Components/ShoppingList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { category: 'meat', name: 'Pizza!' }
  }

  state = { category: 'meat', name: 'Tacos!' }

  callbackFunction = (childData) => {
    this.setState({category: 'meat', name: 'Samosas!'})
  }

  addItem = (item) => {
    const newItem = item;

    // this.setState(
    //   this.state = item
    // )

    console.log('additem');
    console.log(newItem)


    this.setState(
      this.state = newItem
    )

    console.log(this.state)

  }

  render() {

    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>

        <ItemForm onSubmit={ this.addItem.bind(this) } ref={this.value} />



        <CategoryList />

        <ShoppingList {...this.state} dataFromParent = {this.state} />

      </main>
    );
  }

}

export default App;
