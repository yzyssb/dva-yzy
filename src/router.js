import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';

import App from './routes/App';


import dynamic from 'dva/dynamic' // 路由按需加载

const { ConnectedRouter } = routerRedux

function requireAuth(key1,key2){
  console.log(key1,key2)
}

function RouterConfig({ history,app }) {
  const IndexP = dynamic({
    app,
    models: () => [import('./models/menu'),import('./models/indexP')],
    component: () => import('./routes/IndexP')
  })
  const SecondP = dynamic({
    app,
    models: () => [import('./models/menu'),import('./models/secondP')],
    component: () => import('./routes/SecondP')
  })
  return (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route path="/" exact component={IndexP} onEnter={requireAuth} />
                <Route path="/secondP" exact component={SecondP} onEnter={requireAuth} />
                <Route path="*" render={() => <Redirect to="IndexP" />} />
            </Switch>
        </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
