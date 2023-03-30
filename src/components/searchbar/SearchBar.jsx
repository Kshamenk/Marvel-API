import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";
import { getCharacter } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 600);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleCharacter() {
    dispatch(getCharacter(input));
  }

  const handleInputChange = (event) => {
    var value = event.target.value;
    setInput(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      {isSmallScreen ? (
        <button className={styles.search} onClick={handleCharacter}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      ) : null}
      <button className={`${styles.search} ${styles["search-large"]}`} onClick={handleCharacter}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}