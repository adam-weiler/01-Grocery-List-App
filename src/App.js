import React from 'react';
import CategoryList from './Components/CategoryList';
import ShoppingList from './Components/ShoppingList';

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

      <CategoryList />

      <ShoppingList />

    </main>
  );
}

export default App;
