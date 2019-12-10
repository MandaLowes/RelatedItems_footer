import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Carousel from './components/carousel'
import Footer from './components/footer'


function App() {
  return (
    <BrowserRouter>
      <div >
        <Route exact path='/' component={Carousel}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;