import { combineReducers } from "redux";
import TokenWordReducer from "./tokenized_word_reducer";
const rootReducer = combineReducers({
  wordList: TokenWordReducer, 
});

export default rootReducer;
