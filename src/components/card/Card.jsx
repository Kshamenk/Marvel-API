import React, {useState} from 'react'
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCharacter} from '../../redux/actions.js'


export default function Card(props) {
  const { name, img, detailId} = props

  const [fav, setFav] = useState(false);

  const dispatch = useDispatch()
  const handleFavorite = () => {
    dispatch(addCharacter(props))
    setFav(!fav)
  }
  
  return (
    <div className={styles.card} >
      {fav ? (
        <button  onClick={handleFavorite}>❤️</button>
      ) : (
        <button  onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${detailId}`} >
      <h3>{name}</h3>
      </Link>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}

