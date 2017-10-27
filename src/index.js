import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux-zero/react';
import store from './store';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Home from './Home'
import Checkout from './checkout'
import yakiUdon from './images/logo.png';

const Index = ({ food }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="y-acontain">
                    <NavLink to={"/"}><img src={yakiUdon} /></NavLink>
                    <NavLink to={"/"} className="y-ashop" >Shopping Cart
                            <span className="y-spanrosa"><span className="y-abtnp">0</span>items</span>
                    </NavLink>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
