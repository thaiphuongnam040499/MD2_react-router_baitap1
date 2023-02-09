import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserDetail from './components/UserDetail';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';
import Error404 from './components/Error404';
import { useState } from 'react';

function App() {
  const [users,setUser] = useState([
    {id:'001',name:'tuấn anh 01',email:'tuananh@gmail.com'},
    {id:'002',name:'tuấn anh 02',email:'tuananh@gmail.com'},
    {id:'003',name:'tuấn anh 03',email:'tuananh@gmail.com'},
    {id:'004',name:'tuấn anh 04',email:'tuananh@gmail.com'},
    {id:'005',name:'tuấn anh 05',email:'tuananh@gmail.com'},
    {id:'006',name:'tuấn anh 06',email:'tuananh@gmail.com'},
    {id:'007',name:'tuấn anh 07',email:'tuananh@gmail.com'},
    {id:'008',name:'tuấn anh 08',email:'tuananh@gmail.com'}
  ])
  return (
    <div className="App">
      <div className="container">
        {/* Navbar */}
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/user'} element={<User users={users}/>}></Route>
          <Route path={'/user/:userId'} element={<UserDetail users={users}/>}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'*'} element={<Error404/>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
