import { TOKENIZE_WORD } from "../action/index";


export default function(state = [], action){
    console.log(action.payload)
    switch(action.type){
    case TOKENIZE_WORD:
        return action.payload.data.word_list;
    }
    return state;
}