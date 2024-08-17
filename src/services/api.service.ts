import {baseUrl, imgUrl, options} from "@/constants/constants";
import {Interfaces, IResMovieProps, totalPagesProps} from "@/interfaces/interfaces";
import {IGenre} from "@/models/IGenre";
import {IMovie} from "@/models/IMovie";

interface Props {
    allMovies: IMovie[]
    topRatedMovies: IMovie[]
}

const getTotalPages = async ():Promise<totalPagesProps> => {
    const response = await fetch(baseUrl + '/discover/movie', options)
        .then(res => res.json())
    return response.total_pages;
}

const getAllMovies = async (page: number = 1, results: Interfaces): Promise<Props> => {
    const allMovies: IMovie[] = [];

    if (results && results.total_pages) {
        for (let i = page; i <= results.total_pages; i++) {
            try {
                const response = await fetch(baseUrl + '/discover/movie?page=' + i, options)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! status: ${res.status}`);
                        }
                        return res.json();
                    });

                if (!response.results || !Array.isArray(response.results)) {
                    throw new Error('Results are missing or undefined in the response.');
                }

                allMovies.push(...response.results);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
                break;
            }
        }
    }
    const sortedMovies = allMovies.length > 0 ?
        allMovies.sort((a, b) => b.vote_average - a.vote_average) : [];

    const topRatedMovies = sortedMovies.slice(0, 16);

    return { allMovies, topRatedMovies };
}



const getMoviesByPage = async (page: number = 1): Promise<Interfaces>  => {

    const response:Interfaces = await fetch(baseUrl + '/discover/movie?page=' + page,
        options).then(res => res.json());

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
    getTotalPages,
    getAllMovies,
    getAllMoviesByGenre,
    getMoviesByPage,
    getMovieById,
    getGenres
}