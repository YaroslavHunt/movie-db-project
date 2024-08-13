import React from 'react';
import {getAllMovies} from "@/services/api.service";
import styles from './page.module.css'
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";

const MoviesPage = async () => {

    let movies = await getAllMovies();

    return (
        <div className={styles.movies_page}>
            <MoviesListComponent movies={movies}/>
        </div>
    );
};

export default MoviesPage;