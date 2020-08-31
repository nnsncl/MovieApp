import React, { useState, useEffect } from 'react'
import { Navbar } from '../components'

import firebaseApp from '../firebase';
import axios from 'axios'

export function BrowseContainer() {
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
            <Navbar>
                <Navbar.Frame>
                    <p>Navbar</p>
                </Navbar.Frame>
            </Navbar>
            <h1>Browse</h1>
            <button onClick={() => firebaseApp.auth().signOut()} >Sign out</button>
            {movies.map(item =>
            <div key={item.id} >
                <img src={item.poster} alt='img' />
                <p >{item.title}</p>
            </div>
               
            )}
        </>
    )
}