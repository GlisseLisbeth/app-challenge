import { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route {...rest}>
      <Suspense fallback={<span>Espere...</span>}>
        {isAuthenticated ? <Component /> : <Redirect to="/" />}
      </Suspense>
    </Route>
  );
};
