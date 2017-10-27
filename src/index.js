import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux-zero/react';
import store from './store';
import {HashRouter, Switch, Route,NavLink,Redirect} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Home from './Home'
import Checkout from './checkout'
import yakiUdon from './images/logo.png';

const Index = () => 
{
    return(
        <div >
            <Grid className="y-acontain">
                <Row className="show-grid">
                    <Col xs={4} md={4}>
                    <NavLink to={"/home"}><img src={yakiUdon} /></NavLink>
                    </Col>
                    <Col className="text-right" xs={8} md={8}>
                        <a className="y-ashop" >Shopping Cart
                            <span className="y-spanrosa"><span className="y-abtnp" >{}0</span>items</span>
                        </a>
                    </Col>
                </Row>
                <hr />
            </Grid> 
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/checkout" component={Checkout} />        
                    </Switch>
                </HashRouter>
            </Provider>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();