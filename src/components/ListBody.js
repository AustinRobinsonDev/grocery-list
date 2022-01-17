import React from 'react'

const ListBody = ({item, setItem, list, setList}) => {
    const handleClick = () => {
        console.log('hello')
    }
    return (
        <main>
            <h1>Grocery List</h1>
            <input type="text" onChange={(e) => setItem(e.target.value)} value={item}/> 
            <button onClick={handleClick}>Add Item</button>
            <ul>
        
            </ul>
            <button>Clear Items</button>
        </main>
    )
}

export default ListBody
