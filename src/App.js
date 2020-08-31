import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Browse, SignIn, SignUp, Edit, Details, Add } from './pages';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './helpers/PrivateRoute';

export default function App() {

  return (
    <AuthProvider>
    {/* Everything nested in AuthProvider will have access to currentUser through the context API */}
      <Router>
        {/* Wrap the routes in Router which provides browsing context */}
        <div>
          <PrivateRoute exact path='/' component={Browse} />
          {/* Set Home as a Private route. This Route will be available only for authenticated users */}
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/edit' component={Edit} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/add' component={Add} />
        </div>
      </Router>
    </AuthProvider>
  );
};
