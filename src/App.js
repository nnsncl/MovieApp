import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Browse, SignIn, SignUp, TmdbDistant, Details, Add } from './pages';
import { AuthProvider } from './auth/Auth';
import { LocalDatabaseProvider } from './constant/LocalDababase';
import PrivateRoute from './helpers/PrivateRoute';

export default function App() {

  return (
    <AuthProvider>
      <LocalDatabaseProvider>
        <Router>
          <div>
            <PrivateRoute exact path='/' component={Browse} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/tmdb-details/:id' component={TmdbDistant} />
            <Route exact path='/details/:id' component={Details} />
            <Route exact path='/add' component={Add} />
          </div>
        </Router>
      </LocalDatabaseProvider>
     </AuthProvider>
  );
};
