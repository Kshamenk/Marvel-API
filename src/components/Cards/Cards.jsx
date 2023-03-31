import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, revertCharacter } from "../../redux/actions.js";
import styles from "./Cards.module.css";
import Card from "../card/Card.jsx";
import SearchBar from "../searchbar/SearchBar.jsx";
import Paginacion from "../Paginacion/Paginacion.jsx";

export default function Cards() {
  const originalCharacters = useSelector((state) => state.allCharacters); // arreglo de personajes en su orden original
  const reversedCharacters = useSelector((state) => state.reverseCharacters); // arreglo de personajes en orden invertido
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1); // el 1 para arrancar en la 1° página
  const [charactersPerPage, setCharactersPerPage] = useState(12); // 6 personajes por página
  const [isReversed, setIsReversed] = useState(false); // flag para indicar si se debe mostrar el arreglo de personajes en su orden original o invertido

  // obtener el arreglo de personajes a mostrar según el estado de isReversed
  const currentCharacters = isReversed ? reversedCharacters : originalCharacters;

  // función para invertir el arreglo de personajes y setear el estado de isReversed
  const handleReverseClick = () => {
    if (!isReversed) {
      dispatch(revertCharacter());
    }
    setIsReversed(!isReversed);
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstChararcter = indexOfLastCharacter - charactersPerPage;
  const charactersToRender = currentCharacters.slice(
    indexOfFirstChararcter,
    indexOfLastCharacter
  );

  return (
    <div>
      <SearchBar />
      <div className={styles.Cards}>
        {charactersToRender.map((char) => {
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
      <button  className={styles.sortButton} onClick={handleReverseClick}>
        {isReversed ? "Ordenar" : "Desordenar"}
      </button>
      <Paginacion
        charactersPerPage={charactersPerPage}
        totalCharacters={currentCharacters.length} // utilizar el arreglo de personajes a mostrar
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}