import { combineReducers } from "redux";
import TokenWordReducer from "./tokenized_word_reducer";
import VectorizeWordReducer from "./vectorize_word_reducer";
import NameEntityReducer from "./name_entity_recognizer_reducer";
import POSReducer from "./part_of_speech_reducer";
const rootReducer = combineReducers({
  wordList: TokenWordReducer,
  similarMatrix: VectorizeWordReducer,
  nerTagList: NameEntityReducer,
  posTagList: POSReducer,
});

export default rootReducer;
