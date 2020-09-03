import React, { useState, useEffect } from 'react'
import { ImageSection, Grid, Button } from '../components'
import axios from 'axios'

export default function DistantMovieContainer() {
    const [distantMovies, setDistantMovies] = useState([])
    useEffect(() => {
        try {
            const fetchDistantData = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/120?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                setDistantMovies(response.data);
            }
            fetchDistantData();

        } catch (error) {
            alert(error.message)
        }

    }, []);

    return ( 
        <ImageSection>
            <ImageSection.Overlay />
            <ImageSection.Media src={'http://image.tmdb.org/t/p/original' + distantMovies.backdrop_path} responsiveMargin={'true'} >
                <Grid maxFreeze={'true'} >
                    <Grid.Row>
                        <Grid.Col size={1} >
                            <ImageSection.Frame>
                                <ImageSection.Title>{distantMovies.title}</ImageSection.Title>
                                <ImageSection.Subtitle>{distantMovies.tagline}</ImageSection.Subtitle>
                                <Button.Large href={distantMovies.homepage} target="_blank" rel="noopener noreferrer" >Watch now</Button.Large>
                            </ImageSection.Frame>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </ImageSection.Media>
        </ImageSection>

    )
}