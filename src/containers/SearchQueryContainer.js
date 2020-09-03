import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Grid, Section, Heading, SearchInput, Card, Button } from '../components'
import NavigationContainer from './NavigationContainer'
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
            <NavigationContainer />
            <Grid maxFreeze={'true'} >
                <Grid.Row>
                    <Grid.Col size={1}>
                        <Heading>
                            <SearchInput>
                                <SearchInput.Field
                                    type='text'
                                    query={query}
                                    setQuery={setQuery}
                                    placeholder='Search...'
                                />
                            </SearchInput>
                        </Heading>

                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col size={1} >
                        {distantMovies.length > 0 &&
                            <Heading>
                                <Heading.Subtitle>Actors list</Heading.Subtitle>
                            </Heading>
                        }
                        <Section>
                            <Section.Frame>
                                {distantMovies.map(item =>
                                    <Card.FixedWidth key={uuidv4()} >
                                        {item.poster_path === null ?
                                            <Card.Image src={'https://via.placeholder.com/349x524'} alt={item.title} /> :
                                            <Card.Image src={'http://image.tmdb.org/t/p/w342' + item.poster_path} alt={item.title} />
                                        }
                                        <Card.ContentFrame>
                                        <Card.Row>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Button.Light to={'/tmdb-details/' + item.id} >✎</Button.Light>
                                            </Card.Row>
                                            <Card.Row>
                                                <Button>Add to my list</Button>
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