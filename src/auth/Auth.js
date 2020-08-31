/*
AuthProvider store authentication status using createContext API which is used to propagate datas through the Components Tree
*/
import React, { useState, useEffect } from 'react';
import firebaseApp from '../firebase';

// Create the context
export const AuthContext = React.createContext();

// Create the component that will store the authentication status/
export const AuthProvider = ({ children }) => {
    // Hold users and will be updated each time the authentication status changes in firebase
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Wait for changes in the firebase object
        firebaseApp.auth().onAuthStateChanged(setCurrentUser);
        // Use an empty array to run useEffect only once when AuthProvider is mounted on the Tree
    }, []);

    return (
        // Return the Context provider and include the user authentication status as value
        <AuthContext.Provider value={{ currentUser }} >
            {children}
        </AuthContext.Provider>
    );
};