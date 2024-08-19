import React from 'react';
import { getMoviesByPage, getTotalPages } from "@/services/api.service";
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import MoviesPaginationComponent from "@/components/pagination/MoviesPaginationComponent";

interface Params {
    searchParams: { page?: string };
}

const MoviesPage = async ({ searchParams }: Params) => {
    const currentPage = searchParams.page ? +searchParams.page : 1;
    const totalPages = await getTotalPages();
    const movies = await getMoviesByPage(currentPage);

    return (
        <div>
            <MoviesListComponent movies={movies} />
            <MoviesPaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default MoviesPage;
