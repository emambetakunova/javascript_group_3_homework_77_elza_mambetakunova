import {CREATE_MESSAGE_SUCCESS, FETCH_MESSAGES_SUCCESS} from "./actionTypes";
import axios from '../../axios-api';

export const fetchMessagesSuccess = messages => {
    return {type: FETCH_MESSAGES_SUCCESS, messages};
};

export const createMessageSuccess = () => {
    return {type: CREATE_MESSAGE_SUCCESS};
};

export const fetchMessages = () => {
    return dispatch => {
        return axios.get('/messages').then(
            response => dispatch(fetchMessagesSuccess(response.data))
        );
    };
};

export const createMessage = (messageData) => {
    return dispatch => {
        return axios.post('/messages', messageData).then(
            () => dispatch(createMessageSuccess())
        );
    };
};