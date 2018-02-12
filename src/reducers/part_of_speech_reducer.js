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

  return {
    token_list: ["ตำรวจ", "พบ", "ผู้", "ต้อง", "สงสัย", "ที่", "สถานี"],
    tag_list: ["ABB_LOC_B", "O", "ABB_PER_B", "O", "TRM_I", "O", "O"]
  };
}
