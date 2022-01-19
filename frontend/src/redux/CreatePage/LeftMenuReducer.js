import {ON_SELECT_PAGE, DONE_SELECT_PAGE, ADD_CHOICE, DONE_ADD_CHOICE} from './LeftMenuType';

const initialState = {
    select: false,
    addChoice: false,
    pageName: ''
}

const LeftMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SELECT_PAGE:
            return { 
                ...state,
                select: true,
                pageName: action.payload
            }
        case ADD_CHOICE:
            return { 
                ...state,
                addChoice: true
            }
        case DONE_ADD_CHOICE:
            return {
                ...state,
                addChoice: false
            }
        case DONE_SELECT_PAGE:
            return {
                ...state,
                select: false
            }
        default: return state
    }
}

export default LeftMenuReducer
