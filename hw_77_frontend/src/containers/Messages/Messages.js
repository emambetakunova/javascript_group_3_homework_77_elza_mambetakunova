import React, {Component, Fragment} from 'react';
import {fetchMessages} from "../../store/actions/messagesAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MessageThumbnail from "../../components/MessageThumbnail/MessageThumbnail";


class Messages extends Component {

    componentDidMount() {
        this.props.onFetchMessages();
    }

    render() {
        return (
            <Fragment>
                <h2>
                    Messages
                    <Link to='/messages/new'>
                        <button className="AddMessage">Add message</button>
                    </Link>
                </h2>
                {this.props.messages.map(message => (
                    <div key={message.id}>
                        <MessageThumbnail image={message.image}/>
                        <p>{message.message}</p>
                        <strong>{message.author}</strong>
                    </div>
                ))}
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
