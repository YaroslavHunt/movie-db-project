import React from 'react';
import { getAllMovies } from "@/services/api.service";
import styles from './page.module.css';
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";

interface MoviesPageProps {
    searchParams: { page?: string };
}

const MoviesPage = async ({ searchParams }: MoviesPageProps) => {
    const currentPage = searchParams.page ? +searchParams.page : 1;
    const movies = await getAllMovies(currentPage);

    return (
        <div className={styles.movies_page}>
            <MoviesListComponent results={movies.results} />
            <PaginationComponent
                currentPage={currentPage}
                totalPages={movies.total_pages || 1}
            />
        </div>
    );
};

export default MoviesPage;
