import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Grid, Section, Heading, SearchInput, Card, Button } from '../components'
import axios from 'axios'
import Fuse from 'fuse.js'


export default function Add() {
    const [query, setQuery] = useState('')
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {

        if (query.length > 0) {
            const fetchDistantData = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&page=1&include_adult=false`);
                setDistantMovies(response.data.results);
            }
            fetchDistantData();
        }

        const queryOptions = {
            isCaseSensitive: false,
            includeScore: true,
            includeMatches: true,
            findAllMatches: true,
            minMatchCharLength: 0.5,
            keys: ['title']
        }

        const queryFuse = new Fuse(distantMovies, queryOptions)
        const queryResults = queryFuse.search(query)

        console.log(queryResults)
        // eslint-disable-next-line
    }, [query])

    return (
        <>
            <Grid maxFreeze={'true'} >
                <Grid.Row>
                    <Grid.Col size={1}>
                        <SearchInput>
                            <SearchInput.Field
                                type='text'
                                query={query}
                                setQuery={setQuery}
                                placeholder='Search a movie...'
                            />
                        </SearchInput>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col size={1} >
                        {distantMovies.length > 0 &&
                            <Heading>
                                <Heading.Subtitle>Search results</Heading.Subtitle>
                            </Heading>
                        }
                        <Section>
                            <Section.Frame>
                                {distantMovies.map(item =>
                                    <Card.FixedWidth key={uuidv4()} responsiveWide={'true'}  >
                                        {item.poster_path === null ?
                                            <Card.Image src={'https://via.placeholder.com/349x524'} alt={item.title} /> :
                                            <Card.Image src={'http://image.tmdb.org/t/p/w342' + item.poster_path} alt={item.title} />
                                        }
                                        <Card.ContentFrame>
                                            <Card.Row spaceBetween={'true'}>
                                                <Card.Title>{item.title}</Card.Title>
                                            </Card.Row>
                                            <Card.Row>
                                                <Button.Light to={'/tmdb-details/' + item.id} >
                                                    <svg aria-hidden="true" height='19px' width='19px' transform="rotate(360)" viewBox="0 0 512 512">
                                                        <defs />
                                                        <circle cx="256" cy="256" r="64" fill="#0b090a" />
                                                        <path fill="#0b090a" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                                    </svg>
                                                </Button.Light>
                                                <Button>Add to my list</Button>
                                            </Card.Row>
                                            <Card.Row>

                                            </Card.Row>
                                        </Card.ContentFrame>
                                    </Card.FixedWidth>
                                )}

                            </Section.Frame>
                        </Section>
                    </Grid.Col>
                </Grid.Row>
            </Grid>

        </>
    );
};