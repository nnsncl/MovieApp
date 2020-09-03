import React, { useContext } from 'react'
import { LocalDatabaseContext } from '../constant/LocalDababase'
import { v4 as uuidv4 } from 'uuid'
import { NavigationContainer } from '../containers'
import { useParams } from "react-router-dom";
import { Grid, Heading, Section, ImageSection, Card, Chips, Button } from '../components'

export default function MovieDetailContainer() {
    const { movies } = useContext(LocalDatabaseContext)
    const params = useParams('id')
    // eslint-disable-next-line
    const filteredMovie = movies.filter(movie => movie.id == params.id)[0];

    console.log(movies)
    return (
        <>
            <NavigationContainer />
            {filteredMovie !== undefined &&
                <>
                    <ImageSection.Media src={filteredMovie.backdrop}>
                        <Grid maxFreeze={'true'} >
                            <Grid.Row responsiveCol={'true'} >
                                <ImageSection.FlexFrame>
                                    <Grid.Col size={1} >
                                        <ImageSection.Title>{filteredMovie.title}</ImageSection.Title>
                                        <ImageSection.Subtitle><b>Release date:</b>&nbsp;{filteredMovie.release_date}</ImageSection.Subtitle>
                                        <Grid.Row>
                                            {filteredMovie.categories.map(item => <Chips key={uuidv4()} >{item}</Chips>)}
                                        </Grid.Row>
                                        <Section>
                                            <Button.Large>Remove from my list</Button.Large>
                                        </Section>
                                    </Grid.Col>
                                    <Grid.Col size={1} breakPoint='md' >
                                        <ImageSection.ThumbContainer>
                                            <img src={filteredMovie.poster} alt={filteredMovie.poster} />
                                        </ImageSection.ThumbContainer>
                                    </Grid.Col>
                                </ImageSection.FlexFrame>
                            </Grid.Row>
                        </Grid>
                    </ImageSection.Media>
                    <Grid maxFreeze={'true'} >
                        <Grid.Row responsiveCol={'true'} >
                            <Grid.Col size={1} >
                                <Heading.Subtitle>Synopsys</Heading.Subtitle>
                            </Grid.Col>
                            <Grid.Col size={2} >
                                <ImageSection.Subtitle>{filteredMovie.description}</ImageSection.Subtitle>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col size={1} >
                                <Heading>
                                    <Heading.Subtitle>Actors list</Heading.Subtitle>
                                </Heading>
                                <Section>
                                    <Section.Frame>
                                        {filteredMovie.actors.map(item =>
                                            <Card.FixedWidth key={uuidv4()} >
                                                <Card.Image src={item.photo} alt={item.name} />
                                                <Card.ContentFrame>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Subtitle>{item.character}</Card.Subtitle>
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
                                    <Heading.Subtitle>Similar Movies</Heading.Subtitle>
                                </Heading>
                                <Section>
                                    <Section.Frame>
                                        {filteredMovie.similar_movies.map(item =>
                                            <Card.FixedWidth key={uuidv4()} >
                                                <Card.Image src={item.poster} alt={item.title} />
                                                <Card.ContentFrame>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Subtitle>{item.release_date}</Card.Subtitle>
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