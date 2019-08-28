import React from 'react';
import GroceryItem from './Components/GroceryItem';

function App() {
  return (
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>

      <form id="newItem" className="newitem" autocomplete="off">
        <label for="itemName" className="line-label">New Item</label>
        <div className="addnew">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
          <input type="submit" value="Add" className="form-component btn" />
        </div>
      </form>

      <section id="filterCategories">
        <ul className="filters">
          <li><input type="radio" name="category" value="all" id="filter0" checked /><label for="filter0">all</label></li>
          <li><input type="radio" name="category" value="meat" id="filter1" /><label for="filter1">meat</label></li>
          <li><input type="radio" name="category" value="prod" id="filter2" /><label for="filter2">prod</label></li>
          <li><input type="radio" name="category" value="dairy" id="filter3" /><label for="filter3">dairy</label></li>
          <li><input type="radio" name="category" value="bakery" id="filter4" /><label for="filter4">bakery</label></li>
        </ul>
        <form id="newCat" className="cat-new">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
        </form>
      </section>

      <ul id="shoppingList" className="shoppinglist">
        <GroceryItem category={'meat'} quantity={3} item={'Steaks'} />
        <GroceryItem category={'prod'} quantity={4} item={'Apples'} />
        <GroceryItem category={'dairy'} quantity={1} item={'Milk (1L, 2%)'} />
        <GroceryItem category={'bakery'} quantity={2} item={'Baguettes'} />
      </ul>
    </main>
  );
}

export default App;
