import { combineReducers } from "redux";

import jobReducer from "./jobReducer";

export const allReducers = combineReducers({
    jobReducer,
});

export default allReducers