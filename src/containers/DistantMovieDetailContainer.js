import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useParams } from "react-router-dom";
import { Grid, Heading, Section, ImageSection, Card, Chips, Button, Typography } from '../components'

import axios from 'axios'

export default function DistantMovieDetailContainer() {
    const params = useParams('id')
    const [editMovie, setEditMovie] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [castDetails, setCastDetails] = useState([])
    // eslint-disable-next-line

    useEffect(() => {
        try {
            const fetchDistantData = async () => {
                const getMovieById = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                setEditMovie(getMovieById.data);

                const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`);
                setSimilarMovies(getMovieDetails.data.results);

                const getCastDetails = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                setCastDetails(getCastDetails.data.cast);
            }
            fetchDistantData();

        } catch (error) {
            alert(error.message)
        }
        // eslint-disable-next-line
    }, []);

    // const postToLocalDatabase = async () => {
    //     axios.post('http://localhost:3000/movies', JSON.parse(editMovie))
    // }

    return (
        <>
            {editMovie !== undefined &&
                <>
                    <ImageSection.Media src={'http://image.tmdb.org/t/p/original/' + editMovie.backdrop_path}>
                        <Grid maxFreeze={'true'} >
                            <Grid.Row responsiveCol={'true'} >
                                <ImageSection.FlexFrame>
                                    <Grid.Col size={1} >
                                        <Typography.TitleLarge>{editMovie.title}</Typography.TitleLarge>
                                        <Typography.BodyLarge><strong>Release date:</strong>&nbsp;{editMovie.release_date}</Typography.BodyLarge>
                                        <Grid.Row>
                                            {editMovie.genres !== undefined &&
                                                editMovie.genres.map(item => <Chips key={uuidv4()} >{item.name}</Chips>)
                                            }
                                        </Grid.Row>
                                        <Section>
                                            <Button.Large>Add to my list</Button.Large>
                                        </Section>
                                    </Grid.Col>
                                    <Grid.Col size={1} breakPoint='md' >
                                        <ImageSection.ThumbContainer>
                                            <img src={'http://image.tmdb.org/t/p/original/' + editMovie.poster_path} alt={'http://image.tmdb.org/t/p/w342/' + editMovie.poster_path} />
                                        </ImageSection.ThumbContainer>
                                    </Grid.Col>
                                </ImageSection.FlexFrame>
                            </Grid.Row>
                        </Grid>
                    </ImageSection.Media>
                    <Grid maxFreeze={'true'} >
                        <Heading.Padded>
                            <Grid.Row responsiveCol={'true'} >
                                <Grid.Col size={1} >
                                    <Typography.TitleMd>Resume</Typography.TitleMd>
                                </Grid.Col>
                                <Grid.Col size={2} >
                                    <Typography.BodyLarge>{editMovie.overview}</Typography.BodyLarge>
                                </Grid.Col>
                            </Grid.Row>
                        </Heading.Padded>

                        <Grid.Row>
                            <Grid.Col size={1} >
                                <Heading>
                                    <Typography.TitleMd>Actors list</Typography.TitleMd>
                                </Heading>
                                <Section>
                                    <Section.Frame>
                                        {castDetails.map(item =>
                                            <Card.FixedWidth key={item.id} >
                                                {item.profile_path === null ?
                                                    <Card.Image src={'https://via.placeholder.com/342x513'} alt={item.title} /> :
                                                    <Card.Image src={'http://image.tmdb.org/t/p/w342/' + item.profile_path} alt={item.name} />
                                                }
                                                <Card.ContentFrame>
                                                    <Typography.TitleSm>{item.name}</Typography.TitleSm>
                                                    <Typography.Body>{item.character}</Typography.Body>
                                                </Card.ContentFrame>
                                            </Card.FixedWidth>
                                        )}

                                    </Section.Frame>
                                </Section>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col>
                                <Heading>
                                    <Typography.TitleMd>Similar Movies</Typography.TitleMd>
                                </Heading>
                                <Section>
                                    <Section.Frame>
                                        {similarMovies.map(item =>
                                            <Card.FixedWidth key={uuidv4()} >
                                                {item.poster_path === null ?
                                                    <Card.Image src={'https://via.placeholder.com/342x513'} alt={item.title} /> :
                                                    <Card.Image src={'http://image.tmdb.org/t/p/w342/' + item.poster_path} alt={item.title} />
                                                }
                                                <Card.ContentFrame>
                                                    <Typography.TitleSm>{item.title}</Typography.TitleSm>
                                                    <Typography.Body>{item.release_date}</Typography.Body>
                                                </Card.ContentFrame>
                                            </Card.FixedWidth>
                                        )}
                                    </Section.Frame>
                                </Section>
                            </Grid.Col>
                        </Grid.Row>
                    </Grid>
                </>
            }
        </>
    )
}
