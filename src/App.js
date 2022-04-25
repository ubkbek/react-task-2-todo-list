import React, { useState } from 'react';
import './App.css';


function App() {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  function addItem(){
    if(!newItem){
      alert("enter anything")
      return
    }

    const item = {
      id:Math.floor(Math.random()*1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item])
    setNewItem("")
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }

  return (
    <div className="App container px-5">

    {/* 1. header */}
    <h1 className='mt-5 text-center text-secondary mb-5'>Todo<span className='text-danger'>list</span></h1>

    {/* 2. Input */}
    <div className='row mb-5'>
       <input className='border-0 bg-light fs-6 rounded p-3 col-6 me-2'
    typeof = 'text'
    placeholder = 'add todos...'
    value = { newItem }
    onChange = {e => setNewItem( e.target.value )}
    />
    <button className='col-2 border-0 rounded bg-btn text-white'
      onClick = {() => addItem()}
    >Add</button>
    </div>


    {/* 3. un ordered list */}
    <ul className='list-group list-group-flush p-0 m-0'>
     { items.map(item => {
        return(
          <li key = {item.id} className='text-secondary list-group-item m-0 p-3 ps-0 fs-5 d-flex justify-content-between'>
            {item.value}
            <button className='border-0 rounded bg-danger py-1 px-3 text-white'
              onClick={() => deleteItem( item.id )}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
