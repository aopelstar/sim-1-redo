import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './components/home';
import shelf from './components/Bins';
import bin from './components/Bin';

export default (
    <Switch>
        <Route exact path='/' component = { home }/>
        <Route path='/bins/:id' component = { shelf } />
        <Route path='/bin/:id' component = { bin } />

    </Switch>
)