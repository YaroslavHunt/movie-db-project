import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";

export interface Interfaces {
    results: IMovie[],
    page: number | 1,
    total_pages: number | 1,
    total_results: number | 1
}

export interface IResMovieProps {
    movie: IMovie,
    posterUrl?: string,
    backdropUrl?: string
}

export interface PaginationProps {
    genre?: IGenre[]
    currentPage: number,
    totalPages: number
}


