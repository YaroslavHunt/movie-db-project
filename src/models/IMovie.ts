import {IGenre} from "@/models/IGenre";

export interface IMovie extends IMovieInfo{
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection?: {
        id?: number,
        name?: string,
        poster_path?: string,
        backdrop_path?: string
    },
    budget?: string,
    genres?: IGenre[],
    homepage?:string,
    imdb_id?:string,
    origin_country?:string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number
    poster_path: string
    release_date: string,
    title: string,
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IMovieInfo {
    title?: string,
    release_date: string,
    popularity: number,
    overview: string,
}