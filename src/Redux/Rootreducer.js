import { combineReducers } from "redux";
import AddReducer from "./Addreducer";
import Reducer from "./Reducer";

const rootReducer=combineReducers({
  Reducer:Reducer,
  AddReducer:AddReducer,
})

export default rootReducer;