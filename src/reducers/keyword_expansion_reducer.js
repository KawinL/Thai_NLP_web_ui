import { EXPAND } from "../action/index";

export default function(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case EXPAND:
      console.log(action);
        if(action.payload.request.status){
          if (action.payload.request.status === 200) return { status: "OK", data: action.payload.data };
          else return { status: "ERROR", data: action.payload.request.statusText };
        }
        return { status: "LOADING", data: "Loading" };
    default:
        return {}
  }
  return {status:"OK", data:[
      {word:'พัง', distance: '0.902'},
      {word:'เสียงดัง', distance: '0.801'},
      {word:'ถลอก', distance: '0.785'},
      {word:'สั้น', distance: '0.685'},
      {word:'น้ำมันรั่ว', distance: '0.554'},
      {word:'ยางแตก', distance: '0.202'},
    ]};
}
