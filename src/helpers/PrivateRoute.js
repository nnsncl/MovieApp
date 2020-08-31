import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

export default function PrivateRoute({ component: RouteComponent, ...restProps }) {
    // Use the datas of the provider
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...restProps}
            // Render accept function with rendering logic
            render={routeProps =>
                !!currentUser ? (
                    // if the user is authenticated, render the Route component
                    <RouteComponent {...routeProps} />
                ) : (
                    // Else, redirect to signin
                        <Redirect to={'/signin'} />
                    )
            }
        />
    );
};
