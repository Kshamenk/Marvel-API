import { ADD_CHARACTER, DELETE_CHARACTER, FILTER_CARDS, ORDER_CARDS } from '../redux/actions.js'


const initialState = {
    myFavorites: [],
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            };
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => {
                    return char.id !== action.payload;
                }),
            };
        case FILTER_CARDS:
            const fileteredCharacters = state.allCharacters.filter((char) => {
                return char.gender === action.payload;
            });
            return {
                ...state,
                myFavorites: fileteredCharacters,
            }
        case ORDER_CARDS:
            const sortedCharacters = [...state.allCharacters].sort((a, b) => {
                if (action.payload === "Ascendete") {
                    return a.id - b.id;
                } else if (action.payload === "Descendiente") {
                    return b.id - a.id;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: sortedCharacters,
            };
        default:
            return { ...state };
    }
}


export default reducer;