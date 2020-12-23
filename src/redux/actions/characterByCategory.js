import * as types from "../types/types";

export const getCharacterByCategoryAction = (CATEGORY) => {
    console.log('category si',CATEGORY)
    return async dispatch => {
        try{
            dispatch({ type: types.GET_CHARACTERS_BY_CATEGORY_LOADING });
            const response = await fetch(`https://www.breakingbadapi.com/api/characters?category=${CATEGORY}`)
            const res = await  response.json();
            console.log('response is',res)
            if(response.statusCode === 200){
                return dispatch({type: types.GET_CHARACTERS_BY_CATEGORY_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.GET_CHARACTERS_BY_CATEGORY_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_CHARACTERS_BY_CATEGORY_ERROR, payload: err.data, message: err.message})

        }
    };
};
