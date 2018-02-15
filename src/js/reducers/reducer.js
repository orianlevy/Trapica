import {
    combineReducers
} from 'redux'
import {
    RECEIVE_DATA,
    RECEIVE_DATA_NON_OPTIMIZED,
    RECEIVE_BREAKDOWN,
    SET_QUESTIONS_LOGGEDIN,
    RECEIVE_BREAKDOWN_NON_OPTIMIZED,
    FETCH_DATA_SETTINGS,
    IS_SIGNED_GOOGLE,
    RENDER_BREAKDOWNS
} from '../actions/action'

const initialState = {
    fetching: false,
    fetched: false,
    error: null
}


function titleReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return Object.assign({}, state, {
                title: action.payload
            })
        default:
            return state
    }
}


function visitorStatusReducer(state = initialState, action) {
    switch (action.type) {
        case 'VISITOR_STATUS':
            return Object.assign({}, state, {
                status: action.payload
            })
        default:
            return state
    }
}


function showNavigationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_NAVIGATION':
            return Object.assign({}, state, {
                status: action.payload
            })
        default:
            return state
    }
}


function dataReducer(state = {
    breakdownArray: [],
    breakdownArrayNonOptimized: [],
    isFirstBreakdown: true,
    isFirstBreakdownNonOptimized: true
}, action) {
    switch (action.type) {
        case IS_SIGNED_GOOGLE:
            return Object.assign({}, state, {
                isSignedGoogle: action.isSigned
            }) 
        case RENDER_BREAKDOWNS:
            return Object.assign({}, state, {
                renderBreakdowns: action.payload
            })                                           
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                data: action.data,
            })
        case RECEIVE_DATA_NON_OPTIMIZED:
            return Object.assign({}, state, {
                dataNonOptimized: action.data,
            })          
        case FETCH_DATA_SETTINGS:
            return Object.assign({}, state, {
                fetchSettings: action.shouldFetch
            })                      
        case RECEIVE_BREAKDOWN:
            if (state.isFirstBreakdown == true) {
                state.isFirstBreakdown = false
                state.breakdownArray[action.data.index]=action.data;
                return Object.assign({}, state, {
                    breakdown: state.breakdownArray,
                    create: true
                })
            } else {
                state.breakdownArray[action.data.index]=action.data;
                return Object.assign({}, state, {
                    breakdown: state.breakdownArray,
                    create: true
                })
            }
        case RECEIVE_BREAKDOWN_NON_OPTIMIZED:
            if (state.isFirstBreakdownNonOptimized == true) {
                state.isFirstBreakdownNonOptimized = false
                state.breakdownArrayNonOptimized[action.data.index]=action.data;
                return Object.assign({}, state, {
                    breakdownNonOptimized: state.breakdownArrayNonOptimized,
                    createNonOptimized: true
                })
            } else {
                state.breakdownArrayNonOptimized[action.data.index]=action.data;
                return Object.assign({}, state, {
                    breakdownNonOptimized: state.breakdownArrayNonOptimized,
                    createNonOptimized: true
                })
            }            
        case SET_QUESTIONS_LOGGEDIN:
            return Object.assign({}, state, {
                isLoggedIn: action.data
            })
        default:
            return state
    }
}



const reducer = combineReducers({
    titleReducer,
    dataReducer,
    visitorStatusReducer,
    showNavigationReducer
});

export default reducer