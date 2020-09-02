import React, { useContext } from 'react'
import { LocalDatabaseContext } from '../constant/LocalDababase'
import { NavigationContainer } from '../containers'
import { useParams } from "react-router-dom";
import { Grid } from '../components'

export default function Details() {
    const { movies } = useContext(LocalDatabaseContext)
    const params = useParams('id')
    // eslint-disable-next-line
    const filteredMovie = movies.filter(movie => movie.id == params.id)[0];

    return (
        <>
            <NavigationContainer />
            {filteredMovie !== undefined &&
                <Grid maxFreeze={'true'} >
                    <Grid.Row>
                        <Grid.Col size={1} >
                            <h1>{filteredMovie.title}</h1>
                            <p>{filteredMovie.description}</p>
                            <p>{filteredMovie.release_date}</p>
                            {filteredMovie.categories.map(item =>
                                <p key={item} >{item}</p>
                            )}
                            <img src={filteredMovie.backdrop} alt={filteredMovie.backdrop} />
                            <img src={filteredMovie.poster} alt={filteredMovie.poster} />
                            {filteredMovie.actors.map(item =>
                                <div key={item.name} >
                                    <p>{item.name}</p>
                                    <img src={item.photo} alt={item.name} />
                                    <p>{item.character}</p>
                                </div>
                            )}
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}