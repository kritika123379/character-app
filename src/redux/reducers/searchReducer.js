import * as types from "../types/types";


const initialState = {
    type:"",
    search_character:'',
    fetch_Error:'',
    loading:false,
    message:''
  };

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.GET_SEARCH_CHARACTERS_SUCCESS:
        return Object.assign({}, state, { 
          search_character :action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_CHARACTERS_ERROR:
        return{
          ...state,
          type:action.type,
          search_character:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_SEARCH_CHARACTERS_LOADING:
        return{
          ...state,
          type:action.type,
          message:action.payload,
          loading:true
        }  
        case types.GET_SEARCH_BY_NAME_SUCCESS:
        return Object.assign({}, state, { 
          search_character :action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_SEARCH_CHARACTERS_ERROR:
        return{
          ...state,
          type:action.type,
          search_character:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_CHARACTERS_BY_ID_LOADING:
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
