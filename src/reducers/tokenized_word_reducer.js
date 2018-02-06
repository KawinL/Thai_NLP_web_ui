import { TOKENIZE_WORD } from "../action/index";


export default function(state = [], action){
    
    switch(action.type){
    case TOKENIZE_WORD:
        if (action.payload.data) console.log(action.payload.data);
        if (!action.payload.data) return ["something","wrong"];
        return action.payload.data.string_list;
    default:
        return []
    }
    return state;
}