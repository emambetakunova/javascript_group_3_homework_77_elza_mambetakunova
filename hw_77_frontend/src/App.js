import React, {Component, Fragment} from 'react';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Messages from "./containers/Messages/Messages";
import NewMessage from "./containers/NewMessage/NewMessage";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact component={Messages}/>
                    <Route path="/messages/new" exact component={NewMessage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
