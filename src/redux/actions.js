export const ADD_CHARACTER = "ADD-CHARACTER";


export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character,
    };
};

