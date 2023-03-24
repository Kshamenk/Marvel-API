export const GET_CHARACTER = "GET_CHARACTER";
export const ADD_CHARACTER = "ADD-CHARACTER";
export const DELETE_CHARACTER = 'DELETE_CHARACTER'

export const getCharacter = () => {
    return function (dispatch){
        return (
            fetch('http://gateway.marvel.com/v1/public/characters?ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc')
            .then(res => res.json())
            .then(data => dispatch({type: GET_CHARACTER, payload: data.data.results}))
        )
    }
};

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}

export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}
