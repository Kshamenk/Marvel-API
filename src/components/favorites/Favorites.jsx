import React from 'react';
//import { useSelector } from 'react-redux';
import Card from '../card/Card';

export default function Favorites() {
  //const favorite = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Mis favoritos:</h1>
      <h2>{<Card/>}</h2>
    </div>
  );
}