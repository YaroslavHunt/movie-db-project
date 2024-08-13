import {IMovie} from "@/models/IMovie";
import {baseUrl, options} from "@/constants/constants";

const getAllMovies = async (): Promise<IMovie[]>  => {

    let response = await fetch(baseUrl + '/discover/movie',
        options).then(res => res.json());
    console.log(response.results)

    return response.results;
}

const getMovieById = async (id: number): Promise<{ movie: IMovie, posterUrl: string, backdropUrl: string }> => {
    let response = await fetch(baseUrl + '/movie/' + id,
        options).then((res) => res.json());

    const posterUrl = `https://image.tmdb.org/t/p/w500${response.poster_path}`;
    const backdropUrl = `https://image.tmdb.org/t/p/w500${response.backdrop_path}`;

    return {
        ...response,
        posterUrl,
        backdropUrl
    };
}

// const getGenres = async (): Promise<IGenre[]> => {}

export {
    getAllMovies,
    getMovieById
}