import React, {Component} from 'react';

import './MessageForm.css'

class MessageForm extends Component {
    state = {
        message: '',
        author: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData)
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    render() {
        return (
            <form onSubmit={this.submitFormHandler} className="MessageForm">
                <input
                    type="text" required
                    name="message" id="message"
                    placeholder="Enter message"
                    value={this.state.message}
                    onChange={this.inputChangeHandler}
                    className="Input"
                />
                <input
                    type="text"
                    name="author" id="author"
                    placeholder="Enter author"
                    value={this.state.author}
                    onChange={this.inputChangeHandler}
                    className="Input"
                />
                <input
                    type="file"
                    name="image" id="image"
                    onChange={this.fileChangeHandler}
                />
                <button type="submit">Save</button>
            </form>

        );
    }
}

export default MessageForm;