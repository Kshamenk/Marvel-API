import { GET_CHARACTERS, ADD_FAVORITE, DELETE_FAVORITE, GET_CHARACTER } from '../redux/actions.js'



const initialState = {
    myFavorites : [],   
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: action.payload,
            };
            case ADD_FAVORITE:
                return {
                  ...state,
                  myFavorites: state.myFavorites.concat(action.payload),
                };
            case DELETE_FAVORITE:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter( (char) => {
                        return char.id !== action.payload;
                    })
                };
            case GET_CHARACTER:
                return {
                    ...state,
                    allCharacters: action.payload,
                }          
        default:
            return { ...state };
    }
}


export default reducer;

//((char || {}).origin || {}).name;