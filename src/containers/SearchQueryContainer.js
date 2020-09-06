import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Grid, Section, Heading, SearchInput, Card, Button, Typography } from '../components'
import axios from 'axios'
import Fuse from 'fuse.js'


export default function SearchQueryContainer() {
    const [query, setQuery] = useState('')
    const [distantMovies, setDistantMovies] = useState([])

    useEffect(() => {

        if (query.length > 2) {
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
        queryFuse.search(query)

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
                                <Typography.TitleMd>Search results</Typography.TitleMd>
                            </Heading>
                        }
                        <Section>
                            <Section.Frame>
                                {distantMovies.map(item =>
                                    <Card.FixedWidth key={uuidv4()} responsiveWide={'true'}  >
                                        {item.poster_path === null || item.poster_path === undefined
                                            ? <Card.Image src={'https://via.placeholder.com/349x524'} alt={item.title} />
                                            : <Card.Image src={'http://image.tmdb.org/t/p/w342' + item.poster_path} alt={item.title} />
                                        }
                                        <Card.ContentFrame>
                                            <Card.Row spaceBetween={'true'}>
                                                {item.poster_path === null || item.poster_path === undefined
                                                    ? <Typography.TitleSm>No title</Typography.TitleSm>
                                                    : <Typography.TitleSm>{item.title}</Typography.TitleSm>
                                                }
                                            </Card.Row>
                                            <Card.Row>
                                                <Button.Light to={'/tmdb-details/' + item.id} >
                                                    Add to my list
                                                </Button.Light>
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