import * as types from "../types/types";


//random search
export const setSearchCharacterAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_SEARCH_CHARACTERS_LOADING });
            const response = await fetch('https://www.breakingbadapi.com/api/character/random')
            const res = await  response.json();
            if(response.statusCode === 200){
                return dispatch({type: types.GET_SEARCH_CHARACTERS_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.GET_SEARCH_CHARACTERS_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_SEARCH_CHARACTERS_ERROR, payload: err.data, message: err.message})

        }
    };
};


//search by name
export const setSearchCharacterByName= (name) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_SEARCH_BY_NAME_LOADING });
            const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
            const res = await  response.json();
            if(response.status === 200){
                return dispatch({type: types.GET_SEARCH_BY_NAME_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.GET_SEARCH_BY_NAME_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_SEARCH_BY_NAME_ERROR, payload: err.data, message: err.message})
        }
    };
};



