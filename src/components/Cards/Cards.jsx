import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from '../../redux/actions.js'
import styles from "./Cards.module.css";
import Card from "../card/Card.jsx";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter())
  }, [dispatch])

  return (
    <div>
      <h1>Cards</h1>
      <div className={styles.Cards} >
        {
          characters.map(char => {
            const url = char.thumbnail.path
            const ext = char.thumbnail.extension

            return (
              <Card
                id={char.id}
                name={char.name}
                img={`${url}.${ext}`}
                description={char.description}

              />

            )
          })

        }

      </div>
    </div>
  );
}
