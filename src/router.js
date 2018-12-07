import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux,IndexRoute } from 'dva/router';

import App from './routes/App';


import dynamic from 'dva/dynamic' // 路由按需加载

const { ConnectedRouter } = routerRedux

function RouterConfig({ history,app }) {
  const IndexPage = dynamic({
    app,
    models: () => [import('./models/indexPage')],
    component: () => import('./routes/IndexPage')
  })
  const Users = dynamic({
    app,
    models: () => [import('./models/users')],
    component: () => import('./routes/Users')
  })
  return (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/users" exact component={Users} />
                <Route path="*" render={() => <Redirect to="users" />} />
            </Switch>
        </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
