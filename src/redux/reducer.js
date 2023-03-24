import { GET_CHARACTER, ADD_CHARACTER, DELETE_CHARACTER } from "../redux/actions.js";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
      case DELETE_CHARACTER:
        return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => {
                return char.id !== action.payload
            })
        }
    default:
      return { ...state };
  }
}

export default reducer;

//((char || {}).origin || {}).name;
