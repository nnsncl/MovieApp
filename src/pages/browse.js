import React, { useState, useEffect } from 'react';
import firebaseApp from '../firebase';
import axios from 'axios'

export default function Browse() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        try {
            const fetchData = async () => {
                const response = await axios.get('http://localhost:3000/movies');
                setMovies(response.data);
            }
            fetchData();
            
        } catch(error) {
            console.log(error.message)
        }
   
    }, []);

    return (
        <>
            <h1>Browse</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
            {movies.map(item =>
                <p key={item.id}>{item.title}</p>
            )}
            {/* Call signOut from auth module to log out the user on click using the firebase API */}
        </>
    );
};