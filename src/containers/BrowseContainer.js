import React, { useState, useEffect } from 'react'
import { Card, Grid, Heading } from '../components'

import axios from 'axios'

export default function BrowseContainer() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get('http://localhost:3000/movies');
                setMovies(response.data);
                console.log(response.data)
            }
            fetchData();

        } catch (error) {
            console.log(error.message)
        }

    }, []);

    return (
        <Grid maxFreeze={'true'} >
            <Grid.Row>
                <Grid.Col size={1} >
                    <Heading>
                        <Heading.Flex>
                            <Heading.Subtitle>Votre liste</Heading.Subtitle>
                            <Heading.Button>Ajouter un film</Heading.Button>
                        </Heading.Flex>
                    </Heading>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={1} >
                    <Card.Frame>
                        {movies.map(item =>
                            <Card key={item.id} >
                                <Card.Image src={item.poster} alt={item.title} />
                                <Card.ContentFrame>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.ContentFrame>
                            </Card>
                        )}
                    </Card.Frame>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    )
}