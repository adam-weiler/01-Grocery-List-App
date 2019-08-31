import React, { Component } from 'react';
import ItemForm from './Components/ItemForm';
import CategoryList from './Components/CategoryList';
import ShoppingList from './Components/ShoppingList';

class App extends Component {

  initialCategories = [
    { value: 'all', id: 0 },
    { value: 'meat', id: 1 },
    { value: 'produce', id: 2 },
    { value: 'dairy', id: 3 },
    { value: 'bakery', id: 4 },
    // 
  ]

  // constructor(props) {
  //   super(props);
    state = {
        categories: this.initialCategories
    }

    
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = { category: 'meat', name: 'Pizza!' }
  // }

  // state = { category: 'meat', name: 'Tacos!' }

  // callbackFunction = (childData) => {
  //   this.setState({category: 'meat', name: 'Samosas!'})
  // }

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
    console.log(this.state.categories)
    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>

        <ItemForm onSubmit={ this.addItem.bind(this) } ref={this.value} />



        <CategoryList categories={this.state.categories}/>
        

        {/* <ShoppingList {...this.state} dataFromParent = {this.state} /> */}

      </main>
    );
  }

}

export default App;
