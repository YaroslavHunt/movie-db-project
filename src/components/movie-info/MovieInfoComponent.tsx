import React, {FC} from 'react';
import styles from "./MovieInfoComponent.module.css";
import {IMovieInfo} from "@/models/IMovie";


const MovieInfoComponent:FC<IMovieInfo> = (movie) => {

    return (
        <div className={styles.movie_info}>
            <h1>{movie.title}</h1>
            <h4>Release date: {movie.release_date}</h4>
            <h4>Popularity: {movie.popularity}</h4>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;