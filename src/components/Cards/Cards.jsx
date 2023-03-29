import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../redux/actions.js";
import styles from "./Cards.module.css";
import Card from "../card/Card.jsx";
import SearchBar from "../searchbar/SearchBar.jsx";
import Paginacion from "../Paginacion/Paginacion.jsx";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters); //20
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1); //el 1 para arrancar en la 1° página
  // eslint-disable-next-line
  const [charactersPerPage, setCharactersPerPage] = useState(4); //6 personajes por página
  const indexOfLastCharacter = currentPage * charactersPerPage; //caso 1: 4 = 1 * 4
  const indexOfFirstChararcter = indexOfLastCharacter - charactersPerPage;//caso 1: 0 = 4 - 4
  const currentCharacters = characters.slice(indexOfFirstChararcter, indexOfLastCharacter);

  return (
    <div>
      <SearchBar />
      <div className={styles.Cards}>
        {currentCharacters.map((char) => {
          const url = char.thumbnail.path;
          const ext = char.thumbnail.extension;

          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              img={`${url}.${ext}`}
              description={char.description}
              detailId={char.id}
            />
          );
        })}
      </div>
      <Paginacion
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}