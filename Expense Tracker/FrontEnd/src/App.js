import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Edit from './components/Edit';


function App() {  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/home" element={<Home></Home>}></Route>
      <Route exact path="/edit/:userID" element={<Edit></Edit>}></Route>
      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
