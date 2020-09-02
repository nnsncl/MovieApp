import React, { useState, useEffect } from 'react';
import { SearchInput, Card, Button } from '../components'
import axios from 'axios'
import Fuse from 'fuse.js'


export default function Add() {
    const [query, setQuery] = useState('')
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {
        if (query.length > 0) {
            const fetchDistantData = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&page=1&include_adult=false`);
                setDistantMovies(response.data.results);
            }
            fetchDistantData();
        }

        const queryOptions = {
            isCaseSensitive: false,
            includeScore: true,
            includeMatches: true,
            findAllMatches: true,
            minMatchCharLength: 0.5,
            keys: ['title']
        }

        const queryFuse = new Fuse(distantMovies, queryOptions)
        const queryResults = queryFuse.search(query)

        console.log(queryResults)
        // eslint-disable-next-line
    }, [query])

    return (
        <>
            <SearchInput>
                <SearchInput.Field
                    type='text'
                    query={query}
                    setQuery={setQuery}
                />
            </SearchInput>
            {
                distantMovies.map(item =>
                    <Card key={item.id}>
                        <Card.Image src={'http://image.tmdb.org/t/p/w342' + item.poster_path} alt={item.title} />
                        <Card.ContentFrame>
                            <Card.Title>{item.title}</Card.Title>
                            <Button.Light to={'/edit/' + item.id} >Edit</Button.Light>
                        </Card.ContentFrame>
                    </Card>)
            }
        </>
    );
};