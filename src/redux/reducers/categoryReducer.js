import * as types from "../types/types";


const initialState = {
    type:"",
    fetch_category:[],
    fetch_Character:'',
    fetch_Error:'',
    loading:false,
    message:''
  };

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.GET_CHARACTERS_BY_CATEGORY_SUCCESS:
         console.log('the action',action);
        return Object.assign({}, state, { 
          fetch_category :action.payload,
          type:action.type,
          message:action.message,
          loading:false
        })
      case types.GET_CHARACTERS_BY_CATEGORY_ERROR:
        return{
          ...state,
          type:action.type,
          fetch_category:action.payload,
          message:action.message,
          loading:true
        }
       case types.GET_CHARACTERS_BY_CATEGORY_LOADING:
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
