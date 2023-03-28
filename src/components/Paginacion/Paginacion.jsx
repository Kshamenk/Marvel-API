import React from "react";
import styles from './Paginacion.module.css'

export default function Paginacion({
  charactersPerPage,
  characters,
  paginado,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(characters / charactersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className={styles.container}>
        {pageNumber &&
          pageNumber.map((number) => (
            <button className={styles.btnPag} onClick={() => paginado(number)}>{number}</button>
          ))}
    </div>
  );
}
