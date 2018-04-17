import { TOKENIZE_WORD } from "../action/index";


export default function(state = {}, action){
    
    
    switch(action.type){
    case TOKENIZE_WORD:
        console.log(action);
        if(action.payload.request.status){
            
            if (action.payload.request.status === 200) return { status: "OK", data: action.payload.data.string_list }
            else return { status: "ERROR", data: action.payload.request.statusText };
        }
        return { status: "LOADING", data: "Loading" };
    default:
        return [2]
    }
}