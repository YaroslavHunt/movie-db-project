import React, {FC} from 'react';
import styles from './MoviesListComponent.module.css'
import {IMovie} from "@/models/IMovie";
import MoviesListCardComponent from "@/components/movies-list-card/MoviesListCardComponent";

interface IProps {
    movies: IMovie[];
}

const MoviesListComponent:FC<IProps> = async ({movies}) => {

    return (
        <div className={styles.movies_list_component}>
            <ul>
                {
                    movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)
                }
            </ul>
        </div>
    );
};

export default MoviesListComponent;