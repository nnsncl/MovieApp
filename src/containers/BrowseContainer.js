import React, { useState, useEffect } from 'react'
import { Navbar, Card } from '../components'

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

        } catch (error) {
            console.log(error.message)
        }

    }, []);

    return (
        <>
            <Navbar>
                <Navbar.Frame>
                    <p>Navbar</p>
                    <Navbar.Button onClick={() => firebaseApp.auth().signOut()} >
                        Sign out
                    </Navbar.Button>
                </Navbar.Frame>
            </Navbar>
            {movies.map(item =>
                <Card key={item.id} >
                    <Card.Image src={item.poster} alt={item.title} />
                    <Card.ContentFrame>
                        <p >{item.title}</p>
                    </Card.ContentFrame>
                </Card>
            )}
        </>
    )
}