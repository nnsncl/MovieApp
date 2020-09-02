import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios'

export default function Edit() {
    const params = useParams('id')
    const [editMovie, setEditMovie] = useState([])
    // eslint-disable-next-line
    console.log(params.id)
    console.log(editMovie)
    useEffect(() => {
        try {
            const fetchDistantData = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                setEditMovie(response.data);
            }
            fetchDistantData();

        } catch (error) {
            alert(error.message)
        }
        // eslint-disable-next-line
    }, []);

    console.log(editMovie)

    return (
        <>
            <h1>{editMovie.title}</h1>
        </>
    );
};