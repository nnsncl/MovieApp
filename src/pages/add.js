import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '../containers'
import { SearchInput } from '../components'

import axios from 'axios'
import Fuse from 'fuse.js'


export default function Add() {
    const [query, setQuery] = useState('')
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {

        if (query.length > 0) {
            try {
                const fetchDistantData = async () => {
                    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8028f8241d31d1afd36f7eb2de10193b&query=${query}&page=1&include_adult=false`);
                    setDistantMovies(response.data.results);
                }
                fetchDistantData();

            } catch (error) {
                alert(error.message)
            }
        }

        const options = {
            isCaseSensitive: false,
            includeScore: true,
            includeMatches: true,
            findAllMatches: true,
            minMatchCharLength: 0.5,
            keys: ['title']
        }

        const fuse = new Fuse(distantMovies, options)
        const result = fuse.search(query)

        console.log(result)
        // eslint-disable-next-line
    }, [query])


    return (
        <>
            {/* <NavigationContainer /> */}
            <SearchInput>
                <SearchInput.Field
                    query={query}
                    setQuery={setQuery}
                />
            </SearchInput>
        </>
    );
};