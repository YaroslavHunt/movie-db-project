import React, {FC} from 'react';
import styles from './MoviesListCardComponent.module.css'
import Link from "next/link";
import {imgUrl} from "@/constants/constants";
import {IResMovieProps} from "@/interfaces/interfaces";


const MoviesListCardComponent:FC<IResMovieProps> = ({movie}) => {
    return (
        <div className={styles.movies_list_card}>
            <Link href={{
                pathname: '/movie/' + movie.id,
                query: {data: JSON.stringify(movie)}
            }}><img src={imgUrl + movie.poster_path} alt={movie.title}/>{movie.original_title}</Link>
        </div>
    );
};

export default MoviesListCardComponent;