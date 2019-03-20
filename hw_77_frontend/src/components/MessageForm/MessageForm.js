import React, {Component} from 'react';

class ProductForm extends Component {
    state = {
        message: '',
        author: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit({formData})
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
            <form onSubmit={this.submitFormHandler}>
                <input
                    type="text" required
                    name="message" id="message"
                    placeholder="Enter message"
                    value={this.state.message}
                    onChange={this.inputChangeHandler}
                />
                <input
                    type="text" required min="0"
                    name="author" id="author"
                    placeholder="Enter author"
                    value={this.state.author}
                    onChange={this.inputChangeHandler}
                />
                <input
                    type="file" required
                    name="image" id="image"
                    onChange={this.fileChangeHandler}
                />
                <button type="submit" color="primary">Save</button>
            </form>

        );
    }
}

export default ProductForm;