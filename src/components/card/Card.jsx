import React from 'react'
import styles from '../card/Card.module.css';
import { Link } from 'react-router-dom';


export default function Card(props) {
  const { name, img, detailId} = props
  
  return (
    <div className={styles.card} >
      <Link to={`/detail/${detailId}`} >
      <h3>{name}</h3>
      <img className={styles.image} src={img} alt={name} />
      </Link>
    </div>
  );
}

