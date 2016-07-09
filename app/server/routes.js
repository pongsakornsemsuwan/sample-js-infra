import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from '../components/app';
import News from '../components/news/news';
import User from '../components/user/user';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={News}/>
        <Route path="news" component={News}/>
        <Route path="user" component={User}/>
    </Route>
);
