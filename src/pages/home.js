import React from 'react';
import firebaseApp from '../firebase';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
            {/* Call signOut from auth module to log out the user on click using the firebase API */}
        </>
    );
};