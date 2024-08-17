import React, {FC} from 'react';
import styles from './MoviesListComponent.module.css';
import MoviesListCardComponent from '@/components/movies-list-card/MoviesListCardComponent';
import {Interfaces} from '@/interfaces/interfaces';
import {getAllMovies} from "@/services/api.service";

const TopRatedMoviesList: FC<Interfaces> = async (results) => {
    const { topRatedMovies } = await getAllMovies(1, results);

    return (
        <div className={styles.movies_list_component}>
            <h3>Top Rated</h3>
            {topRatedMovies.map(movie => (
                <MoviesListCardComponent movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default TopRatedMoviesList;