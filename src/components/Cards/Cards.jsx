import  {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCharacter} from '../../redux/actions.js'
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
>>>>>>> 5145151951e218516d950bf6106387e878dc97e2
import styles from "./Cards.module.css";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCharacter())
  }, [dispatch])

  return (
    <div className={styles.Cards} >
      <h1>Cards</h1>
      {
        characters.map(char => {
          return (
            <p key={char.id} >{char.name}</p>
          )
        })
      }

    </div>
  );
}
