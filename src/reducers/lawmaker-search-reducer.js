import {
    SEARCH_LAWMAKERS_REQUEST,
    SEARCH_LAWMAKERS_SUCCESS,
    SEARCH_LAWMAKERS_ERROR,
    UPDATE_SEARCH_OBJECT
} from '../actions/lawmaker_search_actions';

const initialState = {
    lawmakers: [],
    lawmakerCount: 0,
    loading: false,
    error: null,
    searchObject: {
        //0=anti; 1=indifferent; 2=pro
        gunControl: 1, 
        proLife: 1, 
        gayMarriage: 1, 
        cleanEnergy: 1, 
        smallGovernment: 1
    }
};

export default function lawmakerReducer(state=initialState, action) {
    if (action.type === SEARCH_LAWMAKERS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === SEARCH_LAWMAKERS_SUCCESS) {
        return Object.assign({}, state, {
            lawmakers: action.lawmakers,
            lawmakerCount: action.lawmakers.length,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_LAWMAKERS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    else if (action.type === UPDATE_SEARCH_OBJECT) {
        return Object.assign({}, state, {
            searchObject: Object.assign(state.searchObject, {[action.key] : action.value})
        })
    }
    return state;
}
