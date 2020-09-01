import React, { useContext } from 'react'
import { LocalDatabaseContext } from '../constant/LocalDababase'
import { useParams } from "react-router-dom";
// import { Card, Button } from '../components'

export default function Details() {
    const { movies } = useContext(LocalDatabaseContext)

    const params = useParams('id')
    const filteredMovie = movies.filter(movie => movie.id == params.id)[0];

    console.log(filteredMovie)

    return (
        <>
            {/* {console.log(filteredMovie)} */}
        </>
    );
};