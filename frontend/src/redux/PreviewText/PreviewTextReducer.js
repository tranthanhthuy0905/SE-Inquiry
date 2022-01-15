import {FETCH_TEXT_REQUEST, FETCH_TEXT_SUCCESS, FETCH_TEXT_ERROR, FETCH_TEXT_FINAL} from './PreviewTextTypes';

const initialState = {
    loading: false,
    finish: false,
    text: {
        'textId': '',
        'content': '',
        'title': '',
        'createdAt': '',
        'updatedAt': '',
        'choices': []
    },
    error: ''
}

const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEXT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                finish: false,
                text: action.payload,
                error: ''
            }
        case FETCH_TEXT_FINAL:
            return {
                ...state,
                loading: false,
                finish: true,
                text: action.payload,
                error: ''
            }
        case FETCH_TEXT_ERROR:
            return {
                ...state,
                loading: false,
                finish: false,
                text: {},
                error: action.payload
            }
        default: return state
    }
}

export default textReducer;