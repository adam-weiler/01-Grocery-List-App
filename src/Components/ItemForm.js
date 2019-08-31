import React from 'react';

const ItemForm = ({ onSubmit }) => {
    const itemRef = React.createRef();

    const handleSubmit = (event) => {
        // console.log('ItemForm.js - addItem() -', itemRef.current.value)
        event.preventDefault();

        if (itemRef.current.value) {  // Creates new item if user input is not blank.
            const item = {
                name: itemRef.current.value,
            }
    
            onSubmit(item);
            document.getElementById("newItem").reset();  // Resets form.
        }
    }

    // console.log('ItemForm.js renders.');

    return (
        <form id="newItem" className="newitem" autoComplete="off" onSubmit={handleSubmit}>
            <label for="itemName" className="line-label">New Item</label>
            <div className="addnew">
                <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" ref={itemRef} />
                <input type="submit" value="Add" className="form-component btn" />
            </div>
        </form>
    );
}

export default ItemForm;
