import React, { useContext } from 'react'
import { Card, Grid, Heading, Button } from '../components'
import { LocalDatabaseContext } from '../constant/LocalDababase'
export default function BrowseContainer() {
    const { movies } = useContext(LocalDatabaseContext)

    return (
        <Grid maxFreeze={'true'} >
            <Grid.Row>
                <Grid.Col size={1} >
                    <Heading>
                        <Heading.Flex>
                            <Heading.Subtitle>Votre liste</Heading.Subtitle>
                            <Button>Ajouter un film</Button>
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
                                    <Button.Light to='/details' >Details</Button.Light>
                                </Card.ContentFrame>
                            </Card>
                        )}
                    </Card.Frame>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    )
}