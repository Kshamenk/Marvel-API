import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCharacter} from '../../redux/actions.js'

import styles from "./Cards.module.css";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);


  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCharacter())
  }, [dispatch])

  return (
    <div>
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
