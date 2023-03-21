import { GET_CHARACTER } from '../redux/actions.js'


const initialState = {
    
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                allCharacters: action.payload,
            };
        default:
            return { ...state };
    }
}


export default reducer;

//((char || {}).origin || {}).name;