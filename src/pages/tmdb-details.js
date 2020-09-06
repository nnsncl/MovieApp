import React, { useEffect } from 'react';
import { NavigationContainer, DistantMovieDetailContainer } from '../containers'

export default function TmdbMovieDetail() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <NavigationContainer />
            <DistantMovieDetailContainer />
        </>
    );
};