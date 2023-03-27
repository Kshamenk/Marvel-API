import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorites } from '../../redux/actions';


export default function Favorites() {
  const myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteFavorites(id))
  };

  


  return (
    <div>

      <h1>Mis favoritos:</h1>
      {myFavorites.map((fav) => {
        return (
          <div>
            <button onClick={() => handleDelete(fav.detailId)} >X</button>
             <h4>{fav.name}</h4>
             <img src={fav.img} alt={fav.name} />
             
          </div>
        )
      })}
    </div>
  );
}