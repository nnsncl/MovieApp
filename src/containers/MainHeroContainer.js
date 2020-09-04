import React, { useState, useEffect } from 'react'
import { ImageSection, Grid, Typography } from '../components'
import axios from 'axios'

export default function MainHeroContainer() {
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {

        try {
            const fetchDistantData = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/324552?api_key=${process.env.REACT_APP_TMDB_KEY}`);
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
            <ImageSection.Media src={'http://image.tmdb.org/t/p/original/' + distantMovies.backdrop_path} >
                <Grid maxFreeze={'true'} >
                    <Grid.Row>
                        <Grid.Col size={1} >
                            <ImageSection.Frame>
                                <Typography.TitleLarge>Add Movies,<br/>TV Shows and more.</Typography.TitleLarge>
                            </ImageSection.Frame>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </ImageSection.Media>
        </ImageSection>

    )
}