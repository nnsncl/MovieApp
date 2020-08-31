import React, { useState, useEffect } from 'react'
import { ImageSection, Grid } from '../components'
import axios from 'axios'

export default function DistantMovieContainer() {
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {
        try {
            const fetchDistantData = async () => {
                const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=8028f8241d31d1afd36f7eb2de10193b');
                setDistantMovies(response.data);
                console.log(response.data)
            }
            fetchDistantData();

        } catch (error) {
            alert(error.message)
        }

    }, []);



    return (
        <ImageSection>
            <ImageSection.Overlay />
            <ImageSection.Media src={distantMovies.backdrop_path}>
                <Grid maxFreeze={'true'} >
                    <Grid.Row>
                        <Grid.Col size={1} >
                            <ImageSection.Frame>
                                <h1>{distantMovies.title}</h1>
                                <a href={distantMovies.homepage} target='_blank' >link</a>
                            </ImageSection.Frame>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </ImageSection.Media>
        </ImageSection>

    )
}