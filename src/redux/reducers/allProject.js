import * as actionTypes from "../actions/actionTypes";

const initialState = {
    project: [],
    loading: true
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DB_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            }

        default:
            return state;
    }
};

export default projectReducer;