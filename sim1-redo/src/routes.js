import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './components/Home';
import shelf from './components/Bins';
import bin from './components/Bin';
import create from './components/Create';

export default (
    <Switch>
        <Route exact path='/' component = { home }/>
        <Route path='/bins/:id' component = { shelf } />
        <Route path='/bin/:id' component = { bin } />
        <Route path ='/create/:id' component = { create } />

    </Switch>
)