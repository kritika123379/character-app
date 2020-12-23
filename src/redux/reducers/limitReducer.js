import * as types from "../types/types";


const initialState = {
    type:"",
    limit:"",
    offset:"",
    limit_character:"",
    limit_Error:'',
    loading:false,
    message:''
  };

export const limitReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.GET_CHARACTERS_BY_CATEGORY_SUCCESS:
         console.log('the action',action);
        return Object.assign({}, state, { 
          limit_character:action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_CHARACTERS_BY_CATEGORY_ERROR:
        return{
          ...state,
          type:action.type,
          limit_Error:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_CHARACTERS_BY_CATEGORY_LOADING:
        return{
          ...state,
          type:action.type,
          message:action.payload,
          loading:true
        }  
      default:
        return state;
    }
  }
