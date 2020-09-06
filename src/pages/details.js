import React, { useEffect } from 'react';
import { NavigationContainer, MovieDetailContainer } from '../containers'

export default function MovieDetail() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <NavigationContainer />
            <MovieDetailContainer />
        </>
    );
};