import { combineReducers } from "redux";
import TokenWordReducer from "./tokenized_word_reducer";
import VectorizeWordReducer from "./vectorize_word_reducer";
const rootReducer = combineReducers({
  wordList: TokenWordReducer, 
  similarMatrix: VectorizeWordReducer,
});

export default rootReducer;
