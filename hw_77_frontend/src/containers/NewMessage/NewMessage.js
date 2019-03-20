import React, {Component} from 'react';
import MessageForm from "../../components/MessageForm/MessageForm";
import {connect} from "react-redux";
import {createMessage} from "../../store/actions/messagesAction";

import './NewMessage.css'

class NewMessage extends Component {

    createMessage = messageData => {
        this.props.onMessageCreated(messageData).then(() => {
            this.props.history.push('/');
        })
    };

    render() {
        return (
            <div className="NewMessage">
                <h2>New message</h2>
                <MessageForm onSubmit={this.createMessage}/>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
       onMessageCreated: (messageData) => dispatch(createMessage(messageData))
    };
};


export default connect(null, mapDispatchToProps)(NewMessage);