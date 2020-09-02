import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Button } from '../components'


import axios from 'axios'

export default function Edit() {
    const params = useParams('id')
    const [editMovie, setEditMovie] = useState([])
    // eslint-disable-next-line
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

    const postToLocalDatabase = async () => {
        axios.post('http://localhost:3000/movies', JSON.parse(editMovie))
    }

    return (
        <>
            <img src={'http://image.tmdb.org/t/p/w342' + editMovie.backdrop_path} alt={'http://image.tmdb.org/t/p/w342' + editMovie.title} />
            <img src={'http://image.tmdb.org/t/p/w342' + editMovie.poster_path} alt={'http://image.tmdb.org/t/p/w342' + editMovie.title} />
            <input type='text' defaultValue={editMovie.original_title} placeholder={editMovie.original_title} />
            <input type='text' defaultValue={editMovie.overview} placeholder={editMovie.overview} />
            <input type='text' defaultValue={editMovie.popularity} placeholder={editMovie.popularity} />
            <input type='text' defaultValue={editMovie.release_date} placeholder={editMovie.release_date} />
            {editMovie.genres !== undefined &&
                editMovie.genres.map(item =>
                    <input key={item.name} type='text' defaultValue={item.name} placeholder={item.name} />
                )
            }
            <Button onClick={() => postToLocalDatabase()} >Add</Button>
        </>
    );
};