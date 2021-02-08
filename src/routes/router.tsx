import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes, IRoute } from './routes';
import { PrivateRoute } from './private-route';

function RouterApp() {
  const { isLogin } = useSelector((state: any) => state.login);
  return (
    <Router>
      <Switch>
        {routes.map(({ path, isExact, Component, privateRoute }: IRoute) =>
          privateRoute ? (
            <PrivateRoute
              path={path}
              key={path}
              exact={isExact}
              isAuthenticated={isLogin}
              component={Component}
            />
          ) : (
            <Route path={path} key={path} exact={isExact}>
              <Suspense fallback={<span>Espere...</span>}>
                <Component />
              </Suspense>
            </Route>
          )
        )}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterApp;
