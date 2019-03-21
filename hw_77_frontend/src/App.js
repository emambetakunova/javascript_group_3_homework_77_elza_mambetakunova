import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Messages from "./containers/Messages/Messages";
import NewMessage from "./containers/NewMessage/NewMessage";
import {NotificationContainer} from "react-notifications";


class App extends Component {
    render() {
        return (
            <Layout>
                <NotificationContainer/>
                <Switch>
                    <Route path="/" exact component={Messages}/>
                    <Route path="/messages/new" exact component={NewMessage}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
