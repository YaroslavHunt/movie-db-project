import React from 'react';
import {getMovieById} from "@/services/api.service";
import PosterPreviewComponent from "@/components/poster-preview/PosterPreviewComponent";
import styles from './page.module.css';

interface Params {
    searchParams: {
        data?:string
        id?: string;
    }
}

const MoviePage = async ({searchParams}: Params) => {

    let movie;

    if(searchParams && searchParams.data) {
        movie = JSON.parse(searchParams.data)
    }
    const {posterUrl} = await getMovieById(+movie.id);


    return (
        <div className={styles.movie_page}>
            <PosterPreviewComponent movie={movie} posterUrl={posterUrl}/>
        </div>
    );
};

export default MoviePage;