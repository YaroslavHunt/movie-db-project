import React from 'react';
import { getGenres, getMovieById } from "@/services/api.service";
import PosterPreviewComponent from "@/components/poster-preview/PosterPreviewComponent";
import styles from './page.module.css';
import GenreBadgeComponent from "@/components/genre-badge/GenreBadgeComponent";
import StarsRating from "@/app/(client)/stars-rating/StarsRating";
import MovieInfoComponent from "@/components/movie-info/MovieInfoComponent";

interface Params {
    searchParams: {
        data?: string;
        id?: string;
    }
}

const MoviePage = async ({ searchParams }: Params) => {
    let movie;

    if (searchParams && searchParams.data) {
        movie = JSON.parse(searchParams.data);
    }

    const { posterUrl } = await getMovieById(+movie.id);
    const movieGenresIds: number[] = movie.genre_ids;
    const genreList = await getGenres();

    return (
        <div className={styles.movie_page}>
            <div className={styles.poster_preview}>
                <PosterPreviewComponent movie={movie} posterUrl={posterUrl} />
            </div>
            <div className={styles.movie_info}>
                <h1>{movie.title}</h1>
                <div className={styles.genre_badge_container}>
                    <GenreBadgeComponent genresIds={movieGenresIds} genres={genreList}/>
                </div>
                <StarsRating rating={movie.vote_average}/>
                <MovieInfoComponent
                    release_date={movie.release_date}
                    popularity={movie.popularity}
                    overview={movie.overview}
                />
            </div>
        </div>
    );
};

export default MoviePage;
