import React, { useContext } from 'react'
import { LocalDatabaseContext } from '../constant/LocalDababase'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from "react-router-dom";
import { Grid, Heading, Section, ImageSection, Card, Chips, Button, Typography, ModalContainer } from '../components'
import useModal from 'use-react-modal'

export default function MovieDetailContainer() {
    const { movies } = useContext(LocalDatabaseContext)
    const params = useParams('id')
    // eslint-disable-next-line
    const filteredMovie = movies.filter(movie => movie.id == params.id)[0];
    const {
        isOpen,
        openModal,
        closeModal,
        Modal } = useModal({
            background: 'rgba(0, 0, 0, 0.3)',
            closeOnOutsideClick: true,
            closeOnEsc: true,
        })

    console.log(movies)
    return (
        <>
            {filteredMovie !== undefined &&
                <>
                    {isOpen && (
                        <Modal>
                            <ModalContainer>
                                <ModalContainer.Header>
                                    <Button onClick={closeModal}>close</Button>
                                </ModalContainer.Header>
                                <Typography.TitleSm>Warning</Typography.TitleSm>
                                <Typography.BodyLarge>You're about to delete <strong>{filteredMovie.title}</strong> from your list</Typography.BodyLarge>
                                <ModalContainer.FlexFrame>
                                    <Button onClick={closeModal}>Cancel</Button>
                                    {/* <Button.Light>Yes, delete</Button.Light> */}
                                </ModalContainer.FlexFrame>
                            </ModalContainer>
                        </Modal>
                    )}
                    <ImageSection.Media src={filteredMovie.backdrop}>
                        <Grid maxFreeze={'true'} >
                            <Grid.Row responsiveCol={'true'} >
                                <ImageSection.FlexFrame>
                                    <Grid.Col size={1} >
                                        <Typography.TitleLarge>{filteredMovie.title}</Typography.TitleLarge>
                                        <Typography.BodyLarge><strong>Release date:</strong>&nbsp;{filteredMovie.release_date}</Typography.BodyLarge>
                                        <Grid.Row>
                                            {filteredMovie.categories.map(item => <Chips key={uuidv4()} >{item}</Chips>)}
                                        </Grid.Row>
                                        <Section>
                                            <Button.Large onClick={openModal} >
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
                        <Heading.Padded>
                            <Grid.Row responsiveCol={'true'} >
                                <Grid.Col size={1} >
                                    <Typography.TitleMd>Resume</Typography.TitleMd>
                                </Grid.Col>
                                <Grid.Col size={2} >
                                    <Typography.BodyLarge>{filteredMovie.description}</Typography.BodyLarge>
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
                                        {filteredMovie.actors.map(item =>
                                            <Card.FixedWidth key={uuidv4()} >
                                                <Card.Image src={item.photo} alt={item.name} />
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
                                        {filteredMovie.similar_movies.map(item =>
                                            <Card.FixedWidth key={uuidv4()} >
                                                <Card.Image src={item.poster} alt={item.title} />
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