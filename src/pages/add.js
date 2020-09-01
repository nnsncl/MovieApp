import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '../containers'
import { SearchInput } from '../components'

// import axios from 'axios'
import Fuse from 'fuse.js'


export default function Add() {
    const [query, setQuery] = useState('')

    
    const list = [
        {
            title: "Old Man's War",
            author: 'John Scalzi',
            tags: ['fiction']
        },
        {
            title: 'The Lock Artist',
            author: 'Steve',
            tags: ['thriller']
        }
    ]

    useEffect(() => {

        const options = {
            includeScore: true,
            keys: ['title']
        }
        const fuse = new Fuse(list, options)
        const result = fuse.search(query)

        console.log(result)

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