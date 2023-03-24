export const GET_CHARACTER = "ADD-CHARACTER";
export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"



export const getCharacter = () => {
    return function (dispatch){
        return (
            fetch('http://gateway.marvel.com/v1/public/characters?ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc')
            .then(res => res.json())
            .then(data => dispatch({type: GET_CHARACTER, payload: data.data.results}))
        )
    }
};

export const addFavorite = (favorite) => {
    return {
      type: ADD_FAVORITE,
      payload: favorite,
    };
  };
  
  export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
  }

