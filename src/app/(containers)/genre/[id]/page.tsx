import React from 'react';
import {getAllMoviesByGenre, getTotalPagesOfMoviesByGenre} from "@/services/api.service";
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import GenresPaginationComponent from "@/components/pagination/GenresPaginationComponent";

interface Params {
    searchParams: {
        data:string,
        name:string,
        id: string,
        page: string
    }
}


const GenrePage = async ({searchParams}: Params) => {

    let genre;

    if(searchParams && searchParams.data) {
        genre = JSON.parse(searchParams.data)
    }
    const currentPage = searchParams.page ? +searchParams.page : 1;
    const moviesByGenre = await getAllMoviesByGenre(genre.id, currentPage);
    const totalPages = await getTotalPagesOfMoviesByGenre(genre.id);

    return (
        <div>
            <MoviesListComponent movies={moviesByGenre}/>
            <GenresPaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                genre={genre}
            />
        </div>
    );
};

export default GenrePage;