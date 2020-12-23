import * as types from "../types/types";

export const getCharsLimitAndOffsetAction = (offset,limit) => {
     //limit=10
     //offset=1,
     //offset=limit* pagenumber
    console.log('category si',offset,limit)
    return async dispatch => {
        try{
            dispatch({ type: types._LOADING });
            const response = await fetch(`https://www.breakingbadapi.com/api/characters?limit=${limit}offset={offset}`)
            const res = await  response.json();
            console.log('response is',res)
            if(response.statusCode === 200){
                return dispatch({type: types.CHARACTERS_BY_LIMIT_OFFSET_SUCCESS, payload: res, message: res.message})
            }else{
                return dispatch({type: types.CHARACTERS_BY_LIMIT_OFFSET_ERROR, payload: res, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_CHARACTERS_BY_CATEGORY_ERROR, payload: err.data, message: err.message})
        }
    };
};
