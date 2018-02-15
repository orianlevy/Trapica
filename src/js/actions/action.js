import fetch from 'isomorphic-fetch'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_DATA_NON_OPTIMIZED = 'RECEIVE_DATA_NON_OPTIMIZED'
export const SET_QUESTIONS_LOGGEDIN = 'SET_QUESTIONS_LOGGEDIN'
export const RECEIVE_BREAKDOWN = 'RECEIVE_BREAKDOWN'
export const RECEIVE_BREAKDOWN_NON_OPTIMIZED = 'RECEIVE_BREAKDOWN_NON_OPTIMIZED'
export const FETCH_DATA_SETTINGS = 'FETCH_DATA_SETTINGS'
export const IS_SIGNED_GOOGLE = 'IS_SIGNED_GOOGLE'
export const RENDER_BREAKDOWNS = 'RENDER_BREAKDOWNS'


export function setTitle(name) {
    return {
        type: 'SET_TITLE',
        payload: name,
    }
}

export function changeVisitorStatus(status) {
    return {
        type: 'VISITOR_STATUS',
        payload: status,
    }
}

export function showNavigationBar(status) {
    return {
        type: 'SHOW_NAVIGATION',
        payload: status,
    }
}

export function renderBreakdowns(id) {
    return {
        type: RENDER_BREAKDOWNS,
        payload: id,
    }
}

export function sendDataToUI(data) {
    return {
        type: RECEIVE_DATA,
        data: data
    }
}

export function sendDataToUINonOptimized(data) {
    return {
        type: RECEIVE_DATA_NON_OPTIMIZED,
        data: data
    }
}

export function sendBreakdownToUIOptimized(data) {
    return {
        type: RECEIVE_BREAKDOWN,
        data: data
    }
}

export function sendBreakdownToUINonOptimized(data) {
    return {
        type: RECEIVE_BREAKDOWN_NON_OPTIMIZED,
        data: data
    }
}

export function setQuestionsLoggedIn(data) {
    return {
        type: SET_QUESTIONS_LOGGEDIN,
        data: data
    }
}

export function fetchDataforSetting(shouldFetch) {
    return {
        type: FETCH_DATA_SETTINGS,
        shouldFetch: shouldFetch
    }
}

export function sendGoogleConnectCheckIfSigned(isSigned) {
    return {
        type: IS_SIGNED_GOOGLE,
        isSigned: isSigned
    }
}

export function initDashboardButtonOptimized() {
    return dispatch => {
        new Promise(resolve => setTimeout(() => resolve( 
            $("#last_7_days").trigger("click")
        ), 2000));
    };    
}

export function initDashboardButtonNonOptimized() {
    return dispatch => {
        new Promise(resolve => setTimeout(() => resolve( 
            $("#last_7_days").trigger("click")
        ), 2000));
    };    
}

export function googleConnectCheckIfSigned(access_token) {
    
        return dispatch => {
            fetch(`/method/g/oauth/active`, {
                    method: 'GET',               
                    headers: {
                        'authorization': 'Bearer ' + access_token	                
                    }
                })        
                .then(response => response.json())
                .then(json => dispatch(sendGoogleConnectCheckIfSigned(json)))
    
        }
    }

export function fetchDataForDashboard(access_token) {

    return dispatch => {
        fetch(`/campaign/get/`, {
                method: 'GET',               
                headers: {
                    'authorization': 'Bearer ' + access_token
                }
            })        
            .then(response => response.json())
            .then(json => dispatch(sendDataToUI(json)))

    }
}

export function fetchDataForDashboardNonOptimized(access_token) {

    return dispatch => {
        fetch(`/campaign/get/?type=other`, {
                method: 'GET',               
                headers: {
                    'authorization': 'Bearer ' + access_token	                
                }
            })        
            .then(response => response.json())
            .then(json => dispatch(sendDataToUINonOptimized(json)))

    }
}

export function fetchBreakdownsForDashboardOptimized(access_token, id, index) {

    return dispatch => {
        new Promise(resolve => setTimeout(() => resolve(
            fetch(`/campaign/breakdowns/?id=${id}&index=${index}`, {
                    method: 'GET',               
                    headers: {
                        'authorization': 'Bearer ' + access_token
                    }
                })
            .then(response => response.json())
            .then(json => dispatch(sendBreakdownToUIOptimized(json)))
        ), 100));
    };
}

export function fetchBreakdownsForDashboardNonOptimized(access_token, id, index) {

    return dispatch => {
        new Promise(resolve => setTimeout(() => resolve(
            fetch(`/campaign/breakdowns/?id=${id}&index=${index}`, {
                    method: 'GET',               
                    headers: {
                        'authorization': 'Bearer ' + access_token
                    }
                })
            .then(response => response.json())
            .then(json => dispatch(sendBreakdownToUINonOptimized(json)))
        ), 100));
    };
}


export function fetchDataForAdmin(access_token) {

    return dispatch => {
        fetch(`/method/account/ids/`, {
                method: 'GET',               
                headers: {
                    'authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => dispatch(sendDataToUI(json)))
    }
}


export function accountIdChange(access_token, data) {
    return dispatch => {
        fetch(`/method/account/ids/`, {
                method: 'POST',
                headers: {
                    'authorization': 'Bearer ' + access_token
                },                
                body: data              
            })
    }
}