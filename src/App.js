import {useState} from 'react';
import './App.css';
import Alert from './components/Alert'
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
  const [list, setList] = useState(getStorage())
  const [item, setItem] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })
  return (
    <div className="App">
      <Navbar />
      {alert.show && <Alert {...alert} />}
      <ListBody setEditId={setEditId} editId={editId} setIsEditing={setIsEditing} isEditing={isEditing} list={list} setList={setList} item={item} setItem={setItem} />
      <Footer list={list} />
    </div>
  );
}

export default App;