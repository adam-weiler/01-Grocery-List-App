import React, { Component } from 'react';
import ItemForm from './Components/ItemForm';
import CategoryList from './Components/CategoryList';
import ItemList from './Components/ItemList';

class App extends Component {

  initialCategories = [
    { value: 'all', id: 0 },
    { value: 'meat', id: 1 },
    { value: 'produce', id: 2 },
    { value: 'dairy', id: 3 },
    { value: 'bakery', id: 4 },
    // 
  ];

  initialItems = [
    { category: 'meat', name: 'Steaks' },
    { category: 'produce', name: 'Apples' },
    { category: 'dairy', name: 'Milk (1L, 2%)' },
    { category: 'bakery', name: 'Baguettes' },
];

  // constructor(props) {
  //   super(props);
    state = {
        categories: this.initialCategories,
        items: this.initialItems
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

        <ItemList items={this.state.items}/>

        {/* <ItemList {...this.state} dataFromParent = {this.state} /> */}

      </main>
    );
  }

}

export default App;
