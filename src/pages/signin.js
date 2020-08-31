import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import firebaseApp from '../firebase';
import { AuthContext } from '../auth/Auth';

const SignIn = ({ history }) => {
    const handleSignIn = useCallback(
    // useCallback is used to memoize callbacks
        async event => {
            event.preventDefault();
            // Avoid page reload on sumbit
            const { email, password } = event.target.elements;

            try {
                await firebaseApp
                    // Call signInWithEmailAndPassword function from Firebase API and pass in email and password values
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        }, [history]

    );

    const { currentUser } = useContext(AuthContext);
    // Use the Providers datas to track if the user is authenticated

    if (currentUser) {
        return <Redirect to='/' />;
    }
    // If the user is authenticated, redirect the the Private route

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn} >
                <label htmlFor='email' >Email</label>
                <input name='email' type='email' placeholder='Email address' />
                <label htmlFor='password' >Email</label>
                <input name='password' type='password' placeholder='Password' />
                <button type='submit' >Sign In</button>
            </form>
            <Link to='/signup' >Sign Up</Link>
        </div>
    );

};

export default withRouter(SignIn);