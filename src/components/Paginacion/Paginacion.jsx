import React from "react";
import styles from './Paginacion.module.css'

export default function Paginacion({
  charactersPerPage,
  totalCharacters,
  setCurrentPage,
}) {  //como props le paso la logica del paginado para operarlo ak!
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumber.push(i);   //cambie el nombre a totalCharacters 
  }

  return (
    <div className={styles.container}>
      {pageNumber &&
        pageNumber.map((number) => (
          <button
            key={number}
            className={styles.btnPag}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
    </div>
  );
}