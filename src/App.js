import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Order from './Components/Order';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import OnlinePurchase from './Components/OnlinePurchase';

function App() {
    return (
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
            <Route path='/reviews' element={<Reviews/>}></Route>
            <Route path='/onlinepurchase' element={<OnlinePurchase/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/gallery'}>Gallery</Link>
          <Link to={'/order'}>Order</Link>
          <Link to={'/reviews'}>Reviews</Link>
          <Link to={'/onlinepurchase'}>OnlinePurchase</Link>
          <Link to={'/contact'}>Contact</Link>
        </Router>
    );
}

export default App;