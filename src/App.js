import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import  About from '../src/components/about/About.jsx';
import Nav from '../src/components/nav/Nav';
import Form from '../src/components/form/Form';
import Favorites from '../src/components/favorites/Favorites';
import Cards from '../src/components/Cards/Cards.jsx';



function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch()
    .then( (response) => response.json())
    .then( (data) => {
      if (data.name) {
        setCharacters ( (oldChars) => [...oldChars, data]);
      } else {
        window.alert("No existe personaje con ese ID")
      }
    });
  }

  function onClose(id) {
    setCharacters( characters.filter( (char)=> char.id !== id ));
  }

  function login(userData) {
    if (userData.password === pasword && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const location = useLocation();

  useEffect( ()=> {
    !access && navigate('/');
    // eslint-disable-next-line
  },[access, navigate]);





  return (
    <div className="App" style={{ padding: "25px"}}>
      {!access && <Form onLogin={login} />}
      {access && location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home'  element={ <Cards onClose={onClose} characters={characters}/>}/>
        <Route path='/favorites'  element={<Favorites/>}/>
        <Route path='/about'  element={<About />}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
