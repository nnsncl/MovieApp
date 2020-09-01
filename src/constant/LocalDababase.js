import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const LocalDatabaseContext = React.createContext();

export const LocalDatabaseProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get('http://localhost:3000/movies');
                setMovies(response.data);
                // console.log(response.data)
            }
            fetchData();

        } catch (error) {
            alert(error.message)
        }

    }, []);

    return (
        <LocalDatabaseContext.Provider value={{ movies }} >
            {children}
        </LocalDatabaseContext.Provider>
    );
};