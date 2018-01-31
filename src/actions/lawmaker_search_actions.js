import {search} from './support_funcs';

export const SEARCH_LAWMAKERS_REQUEST = 'SEARCH_LAWMAKERS_REQUEST';
export const searchLawmakersRequest = () => ({
    type: SEARCH_LAWMAKERS_REQUEST
});

export const SEARCH_LAWMAKERS_SUCCESS = 'SEARCH_LAWMAKERS_SUCCESS';
export const searchLawmakersSuccess = lawmakers => ({
    type: SEARCH_LAWMAKERS_SUCCESS,
    lawmakers
});

export const SEARCH_LAWMAKERS_ERROR = 'SEARCH_LAWMAKERS_ERROR';
export const searchLawmakersError = error => ({
    type: SEARCH_LAWMAKERS_ERROR,
    error
});

//searchFields below is an object of search fields, obtained from checkbox selections (eg: {gunControl: 100, proLife: 0})
export const searchLawmakers = searchFields => dispatch => {
    dispatch(searchLawmakersRequest());
    //input below is an object of search fields, obtained from checkbox selections (eg: {gunControl: 100, proLife: 0})
    search(searchFields)
        .then(lawmakers => dispatch(searchLawmakersSuccess(lawmakers))) //returns an updated state with the new lawmaker results
        .catch(error => dispatch(searchLawmakersError(error)));
};


export const UPDATE_SEARCH_OBJECT = 'UPDATE_SEARCH_OBJECT';
export const updateSearchObject = (key, value) => ({
    type: UPDATE_SEARCH_OBJECT,
    key,   //= key: key
    value
})