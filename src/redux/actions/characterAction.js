import * as types from "../types/types";

export const setCharactersAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_CHARACTERS_LOADING });
            const response = await fetch('https://www.breakingbadapi.com/api/characters')
            const res = await  response.json();
            if(response.status === 200){
                return dispatch({type: types.GET_CHARACTERS_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.GET_CHARACTERS_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_CHARACTERS_ERROR, payload: err.data, message: err.message})

        }
    };
};

export const getCharacterByIdAction = (id) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_CHARACTERS_BY_ID_LOADING });
            const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
            const res = await  response.json();
            console.log('response is',res)
            if(response.status === 200){
                return dispatch({type: types.GET_CHARACTERS_BY_ID_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.GET_CHARACTERS_BY_ID_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_CHARACTERS_BY_ID_ERROR, payload: err.data, message: err.message})

        }
    };
};

