import { GET_CHARACTERS, ADD_FAVORITE, DELETE_FAVORITE, GET_CHARACTER } from '../redux/actions.js'

//implementar el caso desde aca, que ya viene sin orden, aca lo ajustamos.
//en el componente se despacha el evento(despacha esa accion, sin necesitar de parametos).
//ir en orden accion-EstadoGlobal-Reducer-Boton-Logica.
//ver que se renderice la informacion.
//archivo prueba, invesitgar

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