import {useEffect} from 'react'
import ListItem from './ListItem';
import { IoIosClose } from "react-icons/io";

const ListBody = ({item, setItem, editId, list, setList, isEditing, setIsEditing, setEditId}) => {
    const removeItem = (id) => {
        setList(list.filter(singleItem => singleItem.id !== id))
    }
    const editItem = (id) => {
        const specificItem = list.find((itm) => itm.id === id);
        setIsEditing(true)
        setEditId(id)
        setItem(specificItem.title)
    }
    const clearAll = () => {
        setList([]);
    }
    const handleClick = () => {
        if(!item) {
            //show alert
        } else if (isEditing && item) {
            setList(list.map(itm => {
                if(itm.id === editId) {
                    return {...itm, title: item}
                }
                return itm;
            }))
            setItem('')
            setEditId(null)
            setIsEditing(false)
        } else {
            let newItem  = {
                id: new Date().getTime().toString(),
                title: item
            }
            setList([...list, newItem])
            setItem('')
        }
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    },[list]);
    return (
        <main className='list-body'>
            <h1 className='mt-10'>Grocery List</h1>
            <section className='mt-10'>
                <input type="text" onChange={(e) => setItem(e.target.value)} value={item}/> 
                <button className='btn-connect bdr-l-none' onClick={handleClick}>Add Item</button>
            </section>
            <ul className='mt-10 list-container'>
                {list.map((itm, index) => (
                    <ListItem editItem={editItem} removeItem={removeItem} {...itm} />
                ))}
            </ul>
            {list.length > 0 && <button className='mt-10 btn' onClick={() => clearAll()}>Clear All Items <IoIosClose style={{fontSize: '1rem'}} /></button>}
        </main>
    )
}

export default ListBody
