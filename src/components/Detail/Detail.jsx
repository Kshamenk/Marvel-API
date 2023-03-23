import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Detail.module.css';



export default function Detail() {

    const [character, setCharacter] = useState({})
    console.log(character[0]?.description)
    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters/${detailId}?ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc`)
            .then(res => res.json())
            .then(data => setCharacter(data.data.results))
    }, [detailId]);


    return (
        <div className={styles.contenedor} >
            <div>
                <img src={character[0]?.thumbnail.path + '.' + character[0]?.thumbnail.extension} alt={character[0]?.name} />
            </div>
            <div className={styles.texto} >
                <h1>{character[0]?.name}</h1>
                <h3>{character[0]?.description ? character[0]?.description : "Description not found"} </h3>
            </div>
        </div>
    )
}