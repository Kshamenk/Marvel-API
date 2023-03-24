import React from 'react';
import styles from '../favorites/Favorites.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCharacter} from '../../redux/actions.js'


export default function Favorites() {
    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
    console.log(myFavorites)
    const handlerClose = (id) => {
        dispatch(deleteCharacter(id))
    }
    return (
        <div className={styles.favorites} >
            {
                myFavorites.map(fav => {
                    return (
                        <div >
                            <button onClick={()=>handlerClose(fav.id)}>X</button>
                            <h2>{fav.name}</h2>
                            <img src={fav.img} alt="img not found" />
                        </div>
                    )
                })
            }
        </div>
    )

}
