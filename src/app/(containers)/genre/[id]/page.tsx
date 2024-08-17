import React from 'react';
import {getAllMoviesByGenre} from "@/services/api.service";
import MoviesListComponent from "@/components/movies-list/MoviesListComponent";
import {IMovie} from "@/models/IMovie";
import GenresPaginationComponent from "@/components/pagination/GenresPaginationComponent";

interface Params {
    searchParams: {
        data?:string,
        name?:string,
        id: string,
        page?: string
    }
}


const GenrePage = async ({searchParams}: Params) => {

    let genre;

    if(searchParams && searchParams.data) {
        genre = JSON.parse(searchParams.data)
    }
    const currentPage = searchParams.page ? +searchParams.page : 1;
    const moviesResponse = await getAllMoviesByGenre(genre.id, currentPage);
    const moviesByGenre: IMovie[] = moviesResponse.results;


    return (
        <div>
            <MoviesListComponent results={moviesByGenre}/>
            <GenresPaginationComponent
                currentPage={currentPage}
                totalPages={moviesResponse.total_pages || 1}
                genre={genre}
            />
        </div>
    );
};

export default GenrePage;