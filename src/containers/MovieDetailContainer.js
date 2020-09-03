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
                                            <Button.Large>
                                                <svg aria-hidden="true" height="13px" width='13px' transform="rotate(360)" viewBox="0 0 512 512">
                                                    <defs />
                                                    <rect width="448" height="80" x="32" y="48" fill="#f3f3f4" rx="32" ry="32" />
                                                    <path fill="white" d="M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z" />
                                                </svg>&nbsp;
                                            Remove from my list
                                            </Button.Large>
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