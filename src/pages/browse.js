import React from 'react';
import firebaseApp from '../firebase';

export default function Browse() {
    return (
        <>
            <h1>Browse</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
            {/* Call signOut from auth module to log out the user on click using the firebase API */}
        </>
    );
};