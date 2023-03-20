import React from "react";
import styles from "../searchbar/SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="search" />
      <button>Añadir</button>
    </div>
  );
}
