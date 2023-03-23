import { GET_CHARACTER, ADD_FAVORITE } from '../redux/actions.js'



const initialState = {
    myFavorites : [],
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                allCharacters: action.payload,
            };
            case ADD_FAVORITE:
                return {
                  ...state,
                  myFavorites: state.myFavorites.concat(action.payload),
                };
        default:
            return { ...state };
    }
}


export default reducer;

//((char || {}).origin || {}).name;