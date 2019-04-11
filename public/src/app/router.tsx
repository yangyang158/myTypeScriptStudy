import * as React from 'react';
import { Route, Switch, Redirect, HashRouter, } from 'react-router-dom';

import Siderbar from './siderbar/index';
import Home from './module/home/index';

export default class MainIndex extends React.Component {


    render(){
        return (
            <HashRouter>
               <div>
                    <Siderbar />
                    <div className="module-container">
                        <main>
                            <Switch>
                                <Route exact={true} path="/home" component={Home}/>
                                <Redirect to="/home" />
                            </Switch>
                        </main>
                    </div>
                </div>
            </HashRouter>
        )
    }
}