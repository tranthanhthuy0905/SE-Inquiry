import {FETCH_TEXT_REQUEST, FETCH_TEXT_SUCCESS, FETCH_TEXT_ERROR, FETCH_TEXT_FINAL} from './PreviewTextTypes';
import axios from 'axios';

export const fetchText = (textUri) => {
    return async (dispatch) => {
        dispatch(fetchTextRequest())
        await axios
            .get(textUri)
            .then(response => {
                console.log('respo', response); 
                const text = response.data;
                const choices = text.choices;
                if (choices.length == 0) {
                    dispatch(fetchTextFinal(text));
                } else {
                    dispatch(fetchTextSuccess(text));
                }
            })
            .catch(error => {
                dispatch(fetchTextError(error.message))
            })
    }
}

export const fetchTextRequest = () => {
    return {
        type: FETCH_TEXT_REQUEST
    }
}

export const fetchTextSuccess = text => {
    return {
        type: FETCH_TEXT_SUCCESS,
        payload: text
    }
}

export const fetchTextError = error => {
    return {
        type: FETCH_TEXT_ERROR,
        payload: error
    }
}

export const fetchTextFinal = text => {
    return {
        type: FETCH_TEXT_FINAL,
        payload: text,
        finish: true
    }
}