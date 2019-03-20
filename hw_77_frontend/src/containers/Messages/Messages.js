import React, {Component, Fragment} from 'react';
import {fetchMessages} from "../../store/actions/messagesAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MessageThumbnail from "../../components/MessageThumbnail/MessageThumbnail";

import './Messages.css'


class Messages extends Component {

    componentDidMount() {
        this.props.onFetchMessages();
    }

    render() {
        return (
            <Fragment>
                <div className="Wrapper">
                    <div className="TitleAddMessage">
                        <h2>Messages</h2>
                        <Link to='/messages/new'>
                            <button className="ButtonAddMessage">Add message</button>
                        </Link>
                    </div>
                    {this.props.messages.map(message => (
                        <div key={message.id} className="AllMessages">
                            <MessageThumbnail image={message.image}/>
                            <span><strong>Message: </strong>{message.message}</span>
                            <span><strong>Author: </strong>{message.author}</span>
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMessages: () => dispatch(fetchMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
