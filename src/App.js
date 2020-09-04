import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Browse, SignIn, SignUp, TmdbMovieDetail, MovieDetails, Add } from './pages';
import { AuthProvider } from './auth/Auth';
import { LocalDatabaseProvider } from './constant/LocalDababase';
import PrivateRoute from './helpers/PrivateRoute';

export default function App() {

  return (
    <AuthProvider>
      <LocalDatabaseProvider>
        <Router>
            <PrivateRoute exact path='/' component={Browse} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <PrivateRoute exact path='/tmdb-details/:id' component={TmdbMovieDetail} />
            <PrivateRoute exact path='/details/:id' component={MovieDetails} />
            <PrivateRoute exact path='/add' component={Add} />
      
        </Router>
      </LocalDatabaseProvider>
    </AuthProvider>
  );
};
