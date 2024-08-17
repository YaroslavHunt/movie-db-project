import React from 'react';
import {getGenres, getMovieById} from "@/services/api.service";
import PosterPreviewComponent from "@/components/poster-preview/PosterPreviewComponent";
import styles from './page.module.css';
import GenreBadgeComponent from "@/components/genre-badge/GenreBadgeComponent";
import StarsRating from "@/app/(client)/stars-rating/StarsRating";

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
    const movieGenresIds:number[] = movie.genre_ids;
    const genreList = await getGenres();


    return (
        <div className={styles.movie_page}>
            <PosterPreviewComponent movie={movie} posterUrl={posterUrl}/>
            <GenreBadgeComponent genresIds={movieGenresIds} genres={genreList}/>
            <StarsRating rating={movie.vote_average}/>
        </div>
    );
};

export default MoviePage;