import {useState} from 'react';
import './App.css';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ListBody from './components/ListBody'

const getStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}
function App() {
  // comment
  const [list, setList] = useState(getStorage())
  const [item, setItem] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: true,
    msg: 'Error',
    type: 'success'
  })
  return (
    <div className="App">
      <Navbar />
      <ListBody alert={alert} setAlert={setAlert} setEditId={setEditId} editId={editId} setIsEditing={setIsEditing} isEditing={isEditing} list={list} setList={setList} item={item} setItem={setItem} />
      <Footer list={list} />
    </div>
  );
}

export default App;