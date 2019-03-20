import {CREATE_MESSAGE_SUCCESS, FETCH_MESSAGES_SUCCESS} from "./actionTypes";
import axios from '../../axios-api';

import {NotificationManager} from "react-notifications";

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


export const createNotification = (type, message) => {
    return () => {
        switch (type) {
            case 'success':
                NotificationManager.success(message, type);
                break;
            case 'error':
                NotificationManager.error(message, 'Error 400', 5000);
                break;
            default:
                break;
        }
    };
};

export const createMessage = (messageData) => {
    return dispatch => {
        return axios.post('/messages', messageData).then(() =>
            dispatch(createMessageSuccess()),
            dispatch(createNotification('success'))
        ).catch(error => {
            dispatch(createNotification('error', error.response.data.message))
        });
    };
};