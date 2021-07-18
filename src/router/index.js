import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Request, Auth, Resource, Detail_product } from '../pages';


export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/resource" component={Resource} />
                <Route path="/request" component={Request} />
                <Route path="/detail_product" component={Detail_product} />
            </Switch>
        </Router>
    )
}