import React, {FC} from 'react';
import styles from './MoviesListComponent.module.css';
import MoviesListCardComponent from '@/components/movies-list-card/MoviesListCardComponent';
import {getTopRatedMovies} from "@/services/api.service";

const TopRatedMoviesList: FC = async () => {
    const topRated = await getTopRatedMovies();

    return (
        <div className={styles.movies_list_component}>
            <h3>Top Rated</h3>
            <div className={styles.movies_list_container}>
                {topRated.map(movie => (
                    <div className={styles.movie_card} key={movie.id}>
                        <MoviesListCardComponent movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedMoviesList;