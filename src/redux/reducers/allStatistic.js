import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const statisticReducer = (state = initialState.statistic, action) => {
    switch (action.type) {
        case actionTypes.DB_STATIC:
            return action.payload;
        default:
            return state;
    }
};

export default statisticReducer;