import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react';
import store from './store';
import {HashRouter, Switch, Route} from 'react-router-dom';

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route  exact path = "/" component={App}/>
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();