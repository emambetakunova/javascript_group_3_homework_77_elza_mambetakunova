import {FETCH_MESSAGES_SUCCESS, CREATE_MESSAGE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    messages: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return {...state, messages: action.messages};
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;