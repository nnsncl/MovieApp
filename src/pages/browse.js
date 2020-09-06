import React, { useEffect } from 'react';
import { NavigationContainer, BrowseContainer, MainHeroContainer } from '../containers'

export default function Browse() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])


    return (
        <>
            <NavigationContainer />
            <MainHeroContainer />
            <BrowseContainer />
        </>
    );
};