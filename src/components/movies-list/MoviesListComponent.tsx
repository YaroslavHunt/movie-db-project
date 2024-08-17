import React, {FC} from 'react';
import styles from './MoviesListComponent.module.css'
import MoviesListCardComponent from "@/components/movies-list-card/MoviesListCardComponent";
import {Interfaces} from "@/interfaces/interfaces";


const MoviesListComponent:FC<Interfaces> = (results) => {

    let res = results.results;

    return (
        <div className={styles.movies_list_container}>
                {
                    res.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)
                }
        </div>
    );
};

export default MoviesListComponent;