import * as types from "../types/types";


const initialState = {
    type:"",
    fetch_Characters:[],
    fetch_Character:'',
    fetch_Error:'',
    loading:false,
    message:''
  };

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.GET_CHARACTERS_SUCCESS:
        return Object.assign({}, state, { 
          fetch_Characters :action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_CHARACTERS_ERROR:
        return{
          ...state,
          type:action.type,
          fetch_Characters:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_CHARACTERS_LOADING:
        return{
          ...state,
          type:action.type,
          message:action.payload,
          loading:true
        }  
        case types.GET_CHARACTERS_BY_ID_SUCCESS:
           return Object.assign({}, state, { 
             fetch_Character :action.payload,
             type:action.type,
             message:action.message,
             loading:false
           })
         case types.GET_CHARACTERS_BY_ID_ERROR:
           return{
             ...state,
             type:action.type,
             fetch_Character:action.payload,
             message:action.message,
             loading:true
           }
          case types.GET_CHARACTERS_BY_ID_LOADING:
           return{
             ...state,
             type:action.type,
             fetch_Character:action.payload,
             message:action.payload,
             loading:true
           }  
      default:
        return state;
    }
  }
