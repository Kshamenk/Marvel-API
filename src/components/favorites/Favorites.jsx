import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions.js'
import styles from '../favorites/Favorites.module.css';

function Favorites({myFavorites, allCharacters}) {
    const dispatch = useDispatch();

    const [order, setOrder] = useState("Ascendente");
    const [gender, setGender] = useState("all");

    const handleOrderChange = (e) => {
        dispatch(orderCards(e.target.value));
        setOrder (e.target.value);
    };

    const handleGenderChange = (e) => {
        
    }
    
    
    
    
    
    return ()
}
