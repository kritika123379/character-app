import { combineReducers } from "redux";
import {characterReducer}  from "./characterReducer";
import { searchReducer } from "./searchReducer";
import { categoryReducer } from "./categoryReducer";



export default combineReducers({
  characterdata: characterReducer,
  categoryReducer:categoryReducer,
  searchdata:searchReducer
})


