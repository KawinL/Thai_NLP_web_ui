import { POS_CONSTANCE } from "../action/index";

export default function(state = {}, action) {
  switch (action.type) {
    case POS_CONSTANCE:
      if (action.payload) console.log("patload", action.payload);
      if (!action.payload) return ["something", "wrong"];
      console.log(action.payload);
      return action.payload;
    default:
      return {};
  }
}
