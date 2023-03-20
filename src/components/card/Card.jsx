import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { connect } 'react-redux';
import { addCharacter, deleteCharacter } from '../../redux/actions.js';
import { useState, useEffect } from 'react';


function Card(props) {
    
 const [isFav, setIsFav] = useState(false)

 const handleFavorite = () => {
    if (isFav) {
        setIsFav(false)
        props.deleteCharacter(props.id)
    } else {
        setIsFav(true)
        props.addCharacter(props)
    }
 }



 useEffect( ()=> {
    props.myFavorites.forEach( (fav) => {
        if (fav.id === props.id) {
            setIsFav(true);
        }
    });
 },[props.myFavorites])


 return (
   <div>
     {
      isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
 <button  className={styles.button} onClick={props.onClose} value={props.id}>X</button>
 <Link to={`/detail/${props.detailId}`} >
    <h2>{props.name}</h2>
  </Link>
  <h2>{props.gender}</h2>
  <h2>{props.releaseYear}</h2>
  <h2>{props.powers}</h2>
  <img src={props.image} alt="" />
  </div>
 );
}
