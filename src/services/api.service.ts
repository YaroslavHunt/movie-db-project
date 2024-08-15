import {baseUrl, imgUrl, options} from "@/constants/constants";
import {Interfaces, IResMovieProps} from "@/interfaces/interfaces";
import {IGenre} from "@/models/IGenre";

const getMoviesByPage = async (page: number = 1): Promise<Interfaces>  => {

    const response:Interfaces = await fetch(baseUrl + '/discover/movie?page=' + page,
        options).then(res => res.json());

    // console.log(response)
    return response;

}

const getAllMoviesByGenre = async (genreId: string, page: number = 1): Promise<Interfaces> => {
    const response:Interfaces = await fetch(baseUrl + '/discover/movie?with_genres=' + genreId + '&page=' + page,
        options).then(res => res.json());


    return response;
}

const getMovieById = async (id: number): Promise<IResMovieProps> => {
    let response = await fetch(baseUrl + '/movie/' + id,
        options).then((res) => res.json());

    const posterUrl = `${imgUrl}${response.belongs_to_collection?.poster_path || response.poster_path}`;
    const backdropUrl = `${imgUrl}${response.belongs_to_collection?.backdrop_path || response.backdrop_path}`;

    return {
        ...response,
        posterUrl,
        backdropUrl
    };
}

const getGenres = async (): Promise<IGenre[]> => {
    let response = await fetch(baseUrl + '/genre/movie/list', options).then(res => res.json());
    return response.genres;
}

export {
    getAllMoviesByGenre,
    getMoviesByPage,
    getMovieById,
    getGenres
}