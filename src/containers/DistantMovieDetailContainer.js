import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useParams } from "react-router-dom";
import axios from 'axios'
import {
    Grid,
    Heading,
    Section,
    ImageSection,
    Card,
    Chips,
    Button,
    Typography
} from '../components'

export default function DistantMovieDetailContainer() {
    const params = useParams('id')
    const [editMovie, setEditMovie] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [castDetails, setCastDetails] = useState([])
    const [postToLocalDatabase, setPostToLocalDatabase] = useState({})

    useEffect(() => {
        try {
            const fetchDistantData = async () => {
                const getMovieById = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const getCastDetails = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`);

                setEditMovie(getMovieById.data);
                setCastDetails(getCastDetails.data.cast);
                setSimilarMovies(getMovieDetails.data.results);

                setPostToLocalDatabase(
                    {
                        title: `${getMovieById.data.title}`,
                        release_date: `${getMovieById.data.release_date}`,
                        categories: getMovieById.data.genres.map(item => `${item.name}`),
                        description: getMovieById.data.overview,
                        poster: 'http://image.tmdb.org/t/p/original/' + getMovieById.data.poster_path,
                        backdrop: 'http://image.tmdb.org/t/p/original/' + getMovieById.data.backdrop_path,
                        actors: getCastDetails.data.cast.slice(0, 10).map(item =>
                            (
                                {
                                    name: `${item.name}`,
                                    photo: `http://image.tmdb.org/t/p/w342/${item.profile_path}`,
                                    character: `${item.character}`,
                                }
                            )
                        ),
                        similar_movies: getMovieDetails.data.results.map(item =>
                            (
                                {
                                    title: `${item.title}`,
                                    poster: `http://image.tmdb.org/t/p/w342/${item.poster_path}`,
                                    release_date: `${item.release_date}`,
                                }
                            )
                        )
                    }
                )
            }

            fetchDistantData();

        } catch (error) {
            alert(error.message)
        }
        // eslint-disable-next-line
    }, [])

    function addNewMovieToLocalDatabase() {
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3000/movies',
                data: postToLocalDatabase
            })
            document.location.replace('/')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            {editMovie !== undefined &&
                <>
                    {editMovie.backdrop_path === null || editMovie.backdrop_path === undefined
                        ? ''
                        : <ImageSection.Media src={'http://image.tmdb.org/t/p/original/' + editMovie.backdrop_path}>
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
                                                <Button.Large onClick={() => addNewMovieToLocalDatabase()} >Add to my list</Button.Large>
                                            </Section>
                                        </Grid.Col>
                                        <Grid.Col size={1} breakPoint='md' >
                                            <ImageSection.ThumbContainer>
                                                {editMovie.poster_path === null || editMovie.poster_path === undefined
                                                    ? <img src={'https://via.placeholder.com/349x524'} alt={editMovie.title} />
                                                    : <img src={'http://image.tmdb.org/t/p/original/' + editMovie.poster_path} alt={'http://image.tmdb.org/t/p/w342/' + editMovie.poster_path} />
                                                }

                                            </ImageSection.ThumbContainer>
                                        </Grid.Col>
                                    </ImageSection.FlexFrame>
                                </Grid.Row>
                            </Grid>
                        </ImageSection.Media>
                    }
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
                                                {item.profile_path === null || item.profile_path === undefined
                                                    ? <Card.Image src={'https://via.placeholder.com/342x513'} alt={item.title} />
                                                    : <Card.Image src={'http://image.tmdb.org/t/p/w342/' + item.profile_path} alt={item.name} />
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
