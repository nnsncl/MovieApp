import React, { useContext, useEffect } from 'react'
import { Card, Grid, Heading, Button, Typography, Section } from '../components'
import { LocalDatabaseContext } from '../constant/LocalDababase'
import axios from 'axios'
export default function BrowseContainer() {
    const { movies } = useContext(LocalDatabaseContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <Grid maxFreeze={'true'} >
            <Grid.Row>
                <Grid.Col size={1} >
                    <Heading>
                        <Heading.Flex>
                            <Typography.TitleMd>Your list</Typography.TitleMd>
                            <Button.Light to={'/add'}>Add movies</Button.Light>
                        </Heading.Flex>
                    </Heading>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={1} >
                    <Section>
                        <Section.Frame>
                            {movies.map(item =>
                                <Card.FixedWidth key={item.id} responsiveWide={'true'}  >
                                    {item.poster_path === null || item.poster_path === undefined
                                        ? <Card.Image src={item.poster} alt={item.title} />
                                        : <Card.Image src={'https://via.placeholder.com/349x524'} alt={item.title} />
                                    }
                                    <Card.ContentFrame>
                                        <Card.Row spaceBetween={'true'}>
                                            <Card.ContentFrame>
                                                <Typography.TitleSm>{item.title}</Typography.TitleSm>
                                                <Typography.TitleXs>{item.release_date}</Typography.TitleXs>
                                                <Typography.Body>{item.description.substring(0, 100) + '...'}</Typography.Body>
                                            </Card.ContentFrame>
                                        </Card.Row>
                                        <Card.Row>
                                            <Button.Light to={'/details/' + item.id} >
                                                <svg aria-hidden="true" height='19px' width='19px' transform="rotate(360)" viewBox="0 0 512 512">
                                                    <defs />
                                                    <circle cx="256" cy="256" r="64" fill="#0b090a" />
                                                    <path fill="#0b090a" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                                </svg>
                                            </Button.Light>
                                            <Button onClick={() => {
                                                axios.delete(`http://localhost:3000/movies/${item.id}`);
                                                document.location.reload();
                                            }} >
                                                <svg aria-hidden="true" height="19px" width='19px' transform="rotate(360)" viewBox="0 0 512 512">
                                                    <defs />
                                                    <rect width="448" height="80" x="32" y="48" fill="#f3f3f4" rx="32" ry="32" />
                                                    <path fill="white" d="M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z" />
                                                </svg>
                                            </Button>
                                        </Card.Row>
                                    </Card.ContentFrame>
                                </Card.FixedWidth>
                            )}
                        </Section.Frame>
                    </Section>
                </Grid.Col>

            </Grid.Row>
        </Grid>
    )
}