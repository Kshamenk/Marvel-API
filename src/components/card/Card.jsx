import React from 'react';
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/actions.js';
 
export default function Card(props) {
  const { name, img, detailId } = props;
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(props));
    alert(`${props.name} ha sido agregado a tus favoritos`);
  }

  return (
    <div className={styles.card}>
      <Link to="/favorites">
        <button onClick={handleFavorite}>❤️</button>
      </Link>
      <Link to={`/detail/${detailId}`}>
        <h3>{name}</h3>
      </Link>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}
