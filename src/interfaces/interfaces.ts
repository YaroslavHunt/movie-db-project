import {IMovie} from "@/models/IMovie";

export interface Interfaces {
    results: IMovie[],
    page?: number,
    total_pages?: number,
    total_results?: number
}

export interface IResMovieProps {
    movie: IMovie,
    posterUrl?: string,
    backdropUrl?: string
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

