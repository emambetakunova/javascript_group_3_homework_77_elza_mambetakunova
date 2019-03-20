import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Messages from "./containers/Messages/Messages";
import NewMessage from "./containers/NewMessage/NewMessage";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Messages}/>
                    <Route path="/messages/new" exact component={NewMessage}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
