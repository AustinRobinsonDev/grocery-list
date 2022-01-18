import {useEffect} from 'react'
import ListItem from './ListItem';
import { IoIosClose } from "react-icons/io";
import Alert from './Alert'

const ListBody = ({item, alert, setAlert, setItem, editId, list, setList, isEditing, setIsEditing, setEditId}) => {
    const removeItem = (id) => {
        setList(list.filter(singleItem => singleItem.id !== id));
        showAlert(true, 'danger', 'Item deleted!');
    }
    const editItem = (id) => {
        const specificItem = list.find((itm) => itm.id === id);
        setIsEditing(true)
        setEditId(id)
        setItem(specificItem.title)
    }
    const clearAll = () => {
        setList([]);
        showAlert(true, 'danger', 'All items deleted!');

    }
    const showAlert = (show=false, type='',msg='') => {
        setAlert({show, type, msg});
    }
    const handleClick = () => {
        if(!item) {
            showAlert(true, 'danger', 'Please enter a value');
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
            showAlert(true, 'success', 'Item updated!');
        } else {
            let newItem  = {
                id: new Date().getTime().toString(),
                title: item
            }
            setList([...list, newItem])
            setItem('')
            showAlert(true, 'success', 'Item added!');
        }
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    },[list]);
    return (
        <main className='list-body'>
            {alert.show ? <Alert removeAlert={showAlert} {...alert} /> : <div className='height'></div>}
            <h1 className='mt-10'>Grocery List</h1>
            <section className='mt-10'>
                <input placeholder='Milk...' type="text" onChange={(e) => setItem(e.target.value)} value={item}/> 
                <button className='btn-connect bdr-l-none' onClick={handleClick}>{isEditing ? 'Save' : 'Add Item'}</button>
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
