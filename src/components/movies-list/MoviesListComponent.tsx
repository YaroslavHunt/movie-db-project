import React, { FC } from 'react';
import styles from './MoviesListComponent.module.css';
import MoviesListCardComponent from "@/components/movies-list-card/MoviesListCardComponent";
import { IMovie } from "@/models/IMovie";

interface Props {
    movies: IMovie[];
}

const MoviesListComponent: FC<Props> = ({ movies }) => {
    return (
        <div className={styles.movies_list_container}>
            {movies.map(movie => (
                <MoviesListCardComponent movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MoviesListComponent;
