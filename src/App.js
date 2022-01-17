import {useState} from 'react';
import './App.css';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ListBody from './components/ListBody'

function App() {
  const [list, setList] = useState([])
  const [item, setItem] = useState('');
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
      <ListBody list={list} setList={setList} item={item} setItem={setItem} />
      <Footer list={list} />
    </div>
  );
}

export default App;
