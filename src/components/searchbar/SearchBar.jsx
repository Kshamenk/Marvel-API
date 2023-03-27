import React, {useState} from "react";
import styles from "../searchbar/SearchBar.module.css";
import { getCharacter } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
const [input, setInput] = useState("");
const dispatch = useDispatch();


function handleCharacter() {
  dispatch(getCharacter(input))
}

const handleInputChange = (event) => {
  var value = event.target.value;
  setInput(value);
}



  return (
    <div className={styles.container}>
      <input type="search" onChange={handleInputChange} />
      <button onClick={handleCharacter} >Buscar</button>
    </div>
  );
}
