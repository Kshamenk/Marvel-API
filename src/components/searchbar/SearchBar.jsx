import React, {useState} from "react";
import styles from "../searchbar/SearchBar.module.css";

export default function SearchBar() {
  const [input, setInput] = useState('');
  const handlerChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <div className={styles.container}>
      <input  type="search" value={input} onChange={handlerChange}/>
      <button>Search...</button>
    </div>
  );
}
