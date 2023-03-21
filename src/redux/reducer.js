import { ADD_CHARACTER } from '../redux/actions.js'


const initialState = {
    
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
            };
        default:
            return { ...state };
    }
}


export default reducer;