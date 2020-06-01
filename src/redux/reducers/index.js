import { combineReducers } from "redux";
import projectReducer from "./allProject"
import dataReducer from "./allData"
import statisticReducer from "./allStatistic"

const reducers = combineReducers({
    dataReducer,
    projectReducer,
    statisticReducer
});

export default reducers;