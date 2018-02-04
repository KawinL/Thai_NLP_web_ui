import { TOKENIZE_WORD } from "../action/index";


export default function(state = [], action){
    console.log(action.payload)
    switch(action.type){
    case TOKENIZE_WORD:
        if (!action.payload.data) return ["something","wrong"]; 
        return action.payload.data.string_list;
    default:
        return []
    }
    return state;
}