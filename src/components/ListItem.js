import React from 'react'
import { IoIosClose } from "react-icons/io";
import { IoIosCut } from "react-icons/io";
const ListItem = ({title, id, removeItem, editItem}) => {
    return (
        <li className='list-item'>
            <h2>{title}</h2>
            <div style={{boxSizing: 'border-box'}}>
                <button onClick={() => editItem(id)} className='mr-10 edit'><IoIosCut /></button>
                <button onClick={() => removeItem(id)} className='danger'><IoIosClose /></button>
            </div>
            
        </li>
    )
}

export default ListItem
