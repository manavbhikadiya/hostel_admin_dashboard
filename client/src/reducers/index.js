import { combineReducers } from "redux";
import { adminReducer,adminDataReducer,checkLoginReducer } from "./adminReducer";

const rootReducers = combineReducers({
    adminReducer,
    adminDataReducer,
    checkLoginReducer,
})
export default rootReducers;