import React, {Component, Fragment} from 'react';
import ProductForm from "../../components/MessageForm/MessageForm";
import {connect} from "react-redux";
import {createMessage} from "../../store/actions/messagesAction";

class NewMessage extends Component {

    createMessage = messageData => {
        this.props.onMessageCreated(messageData).then(() => {
            this.props.history.push('/');
        })
    };

    render() {
        return (
            <Fragment>
                <h2>New message</h2>
                <ProductForm onSubmit={this.createMessage}/>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
       onMessageCreated: (messageData) => dispatch(createMessage(messageData))
    };
};


export default connect(null, mapDispatchToProps)(NewMessage);