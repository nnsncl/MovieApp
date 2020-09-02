import React, { useContext } from 'react'
import { LocalDatabaseContext } from '../constant/LocalDababase'
// import { NavigationContainer } from '../containers'
import { useParams } from "react-router-dom";
import { Grid } from '../components'

export default function Details() {
    const { movies } = useContext(LocalDatabaseContext)
    const params = useParams('id')
    // eslint-disable-next-line
    const filteredMovie = movies.filter(movie => movie.id == params.id)[0];

    return (
        <>
            {filteredMovie !== undefined &&
                <Grid maxFreeze={'true'} >
                    <Grid.Row>
                        <Grid.Col size={1} >
                            <form>
                                <input type='text' defaultValue={filteredMovie.title} placeholder={filteredMovie.title} />
                                <input type='text' defaultValue={filteredMovie.description} placeholder={filteredMovie.description} />
                                <input type='text' defaultValue={filteredMovie.realease_date} placeholder={filteredMovie.realease_date} />
                                {filteredMovie.categories.map(item =>
                                    <input key={item} type='text' defaultValue={item} placeholder={item} />
                                )}
                                <img src={filteredMovie.backdrop} alt={filteredMovie.backdrop} />
                                <img src={filteredMovie.poster} alt={filteredMovie.poster} />
                                {filteredMovie.actors.map(item =>
                                    <div key={item.name} >
                                        <img src={item.photo} alt={item.name} />
                                        <input type='text' defaultValue={item.name} placeholder={item.name} />
                                        <input type='text' defaultValue={item.character} placeholder={item.character} />
                                    </div>
                                )}
                            </form>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}