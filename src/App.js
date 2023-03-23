import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "../src/components/about/About.jsx";
import Nav from "../src/components/nav/Nav";
import Favorites from "../src/components/favorites/Favorites";
import Cards from "../src/components/Cards/Cards.jsx";
import Detail from '../src/components/Detail/Detail.jsx';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={ <Detail/> }/>
      </Routes>
    </div>
  );
}

export default App;
