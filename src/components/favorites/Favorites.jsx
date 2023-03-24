import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';


export default function Favorites() {
  const myFavorites = useSelector(state => state.myFavorites);

  return (
    <div>

      <h1>Mis favoritos:</h1>
      {myFavorites.map((fav) => {
        return (
          <div>
            <Card
            name={fav.name}
            img={fav.img}
            detailId={fav.detailId}
            />
          </div>
        )
      })}

    </div>
  );
}