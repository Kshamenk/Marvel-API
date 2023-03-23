import React from 'react'
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



export default function Card(props) {
  const { name, img, detailId } = props
  const dispatch = useDispatch()


  function handleFavorite() {
    dispatch()
    
  }

  return (
    <div className={styles.card} >
      <button onClick={handleFavorite}>❤️</button>
      <Link to={`/detail/${detailId}`}>
        <h3>{name}</h3>
      </Link>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}

