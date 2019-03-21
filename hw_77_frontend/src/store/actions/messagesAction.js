import {FETCH_MESSAGES_SUCCESS} from "./actionTypes";
import axios from '../../axios-api';

import {NotificationManager} from "react-notifications";

export const fetchMessagesSuccess = messages => {
    return {type: FETCH_MESSAGES_SUCCESS, messages};
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
            case 'Success':
                NotificationManager.success(message, type);
                break;
            case 'Error':
                NotificationManager.error(message, type, 5000);
                break;
            default:
                break;
        }
    };
};

export const createMessage = (messageData) => {
    return dispatch => {
        return axios.post('/messages', messageData).then((data) =>
            dispatch(createNotification('Success', data.data.message))
        ).catch(error => {
            dispatch(createNotification('Error', error.response.data.message))
        });
    };
};