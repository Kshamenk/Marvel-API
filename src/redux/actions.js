export const GET_CHARACTERS = "GET_CHARACTERS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_CHARACTER = "GET_CHARACTER";

//una que me devuelva los char desordenados



export const getCharacters = () => {
    return function (dispatch){
        return (
            fetch('https://gateway.marvel.com/v1/public/characters?limit=100&ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc')
            .then(res => res.json())
            .then(data => dispatch({type: GET_CHARACTERS, payload: data.data.results}))
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

  export const getCharacter = (name) => {
    return function (dispatch){
      return (
        fetch(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc`)
        .then( res => res.json())
        .then( data => dispatch({ type:GET_CHARACTER, payload: data.data.results}))
      )
    }
  }

