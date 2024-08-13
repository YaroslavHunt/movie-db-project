import React, {FC} from 'react';
import styles from './MoviesListCardComponent.module.css'
import Link from "next/link";
import {IMovie} from "@/models/IMovie";

interface Params {
    searchParams: {
        data?:string
        id?: string;
    }
}

interface IProps {
    movie: IMovie
}

const MoviesListCardComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={styles.MoviesListCardComponent}>
            <Link href={{
                pathname: '/movie/' + movie.id,
                query: {data: JSON.stringify(movie)}
            }}>{movie.original_title}</Link>
        </div>
    );
};

export default MoviesListCardComponent;