import React, { useState } from 'react';
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/actions.js';

export default function Card(props) {
  const { name, img, detailId } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false)

  function handleAdd() {
    dispatch(addFavorite(props));
  }

  function handleFavorite() {
    if (isFav) {
      setIsFav(false)
    } else {
      setIsFav(true)

      handleAdd()
    }
  }

  return (
    <div className={styles.card}>
      {
        isFav ? (
          <button className={styles.btnfav} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={styles.btnfav} onClick={handleFavorite}>🤍</button>
        )
      }
      <Link  className={styles.text} to={`/detail/${detailId}`}>
        <h2>{name}</h2>
      </Link>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}
