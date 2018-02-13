import { VECTORIZE_WORD } from "../action/index";

export default function(state={}, action){

    switch (action.type) {
      case VECTORIZE_WORD:
        if (action.payload) console.log('patload',action.payload);
        if (!action.payload) return ["something", "wrong"];
        console.log(action.payload);
        return action.payload;
      default:
        return {};
    }
}