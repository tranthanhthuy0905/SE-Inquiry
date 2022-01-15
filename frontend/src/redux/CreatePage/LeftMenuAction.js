import {ON_SELECT_PAGE, DONE_SELECT_PAGE, ADD_CHOICE, DONE_ADD_CHOICE} from './LeftMenuType';

export const onSelectPage = (pageName) => {
    return { 
        type: ON_SELECT_PAGE,
        payload: pageName
    }
}

export const doneSelectPage = () => {
    return { 
        type: DONE_SELECT_PAGE
    }
}

export const addChoice = () => {
    return { 
        type: ADD_CHOICE
    }
}

export const doneAddChoice = () => {
    return { 
        type: DONE_ADD_CHOICE
    }
}