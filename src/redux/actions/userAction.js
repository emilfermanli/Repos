import data from "../../components/api/apidata";
import * as actionTypes from "./actionTypes"

export function getProjectSuccess(product) {
    return {
        type: actionTypes.DB_PROJECT,
        payload: product
    }
};

export function getDataSuccess(product) {
    return {
        type: actionTypes.DB_DATA,
        payload: product
    }
};

export function getStatistics(product) {
    return {
        type: actionTypes.DB_STATIC,
        payload: product
    }
}

export const loadingFetchRequest = () => {
    return {
        type: actionTypes.LOADING_REQUEST
    }
}

export function getStatistic() {
    return function (dispatch) {
        return data.get(`/statistic`)
            .then(result => result.data)
            .then(result => dispatch(getStatistics(result.data)))
    }
}


export function getProject() {
    return function (dispatch) {
        dispatch(loadingFetchRequest)
        return data.get(`/project`)
            .then(res => res.data)
            .then(result => dispatch(getProjectSuccess(result)))
    }
}

export function getData() {
    return function (dispatch) {
        return data.get(`/data`)
            .then(res => res.data)
            .then(result => dispatch(getDataSuccess(result)))
    }

}