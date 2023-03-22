import React from 'react'
import styles from '../card/Card.module.css';


export default function Card(props) {
  const { name, img, } = props
  return (
    <div className={styles.card} >
      <h3>{name}</h3>
      <img className={styles.image} src={img} alt={name} />
    </div>
  );
}

