import {getAllMoviesApi} from '../api/movie'
import { useState } from 'react';

export function useMovie(){
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null)
    const getAllMovies = async ()=>{
        try {
            setLoading(true);
            const response = await getAllMoviesApi();
            setLoading(false);
            setMovie(response);
        } catch (error) {
            setLoading(false);
            throw error;
        }   
    }

    return {
        loading,
        movie,
        getAllMovies,
    }

}