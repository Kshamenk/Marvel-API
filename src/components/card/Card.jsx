import React from 'react'
import styles from '../card/Card.module.css';
import Cards from '../Cards/Cards';

export default function Card() {
 //const { characters, onClose } = props
    return (
      <div className={styles.card} >
        <h1>Card Component</h1>
       { <Cards  /> }  
      </div>
    );
  }

