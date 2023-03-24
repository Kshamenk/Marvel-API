import React, { useState } from 'react';
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorites } from '../../redux/actions.js';

export default function Card(props) {
  const { name, img, detailId } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false)

  function handleAdd() {
    dispatch(addFavorite(props));
  }

  function handleDelete() {
    dispatch(deleteFavorites(detailId))
  }

  function handleFavorite() {
    if (isFav) {
      setIsFav(false)
      handleDelete()
    } else {
      setIsFav(true)
      handleAdd()
    }
  }

  return (
    <div className={styles.card}>
      <button onClick={handleDelete} >X</button>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <Link to={`/detail/${detailId}`}>
        <h3>{name}</h3>
      </Link>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}
