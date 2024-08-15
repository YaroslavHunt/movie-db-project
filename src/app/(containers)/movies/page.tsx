import React from 'react';
import { getMoviesByPage } from "@/services/api.service";
import styles from './page.module.css';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import MoviesPaginationComponent from "@/components/pagination/MoviesPaginationComponent";

interface Params {
    searchParams: { page?: string };
}

const MoviesPage = async ({ searchParams }: Params) => {
    const currentPage = searchParams.page ? +searchParams.page : 1;
    const movies = await getMoviesByPage(currentPage);

    return (
        <div className={styles.movies_page}>
            <MoviesListComponent results={movies.results} />
            <MoviesPaginationComponent
                currentPage={currentPage}
                totalPages={movies.total_pages || 1}
            />
        </div>
    );
};

export default MoviesPage;
