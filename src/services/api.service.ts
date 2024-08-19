import {baseUrl, imgUrl, options} from "@/constants/constants";
import {Interfaces, IResMovieProps} from "@/interfaces/interfaces";
import {IGenre} from "@/models/IGenre";
import {IMovie} from "@/models/IMovie";


const getTotalPages = async (): Promise<number> => {
    const total = await getMoviesByPage();
    return total.total_pages;
}

const getAllMovies = async (page: number = 1): Promise<IMovie[]> => {
    const total = await getTotalPages();
    const allMovies = [];

    for (let i = page; i <= total; i++) {
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

    return allMovies;
}

const getTopRatedMovies = async (page: number = 1): Promise<IMovie[]> => {
    const allMovies = await getAllMovies();

    const sortedMovies = allMovies.length > 0 ?
        allMovies.sort((a, b) => b.vote_average - a.vote_average) : [];

    return sortedMovies.slice(0, 16);
}




const getMoviesByPage = async (page: number = 1): Promise<Interfaces> => {

    const response: Interfaces = await fetch(baseUrl + '/discover/movie?page=' + page,
        options).then(res => res.json());

    return response;
}


const getAllMoviesByGenre = async (genreId: string, page: number = 1): Promise<Interfaces> => {
    const response: Interfaces = await fetch(baseUrl + '/discover/movie?with_genres=' + genreId + '&page=' + page,
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
    getAllMovies,
    getTopRatedMovies,
    getAllMoviesByGenre,
    getMoviesByPage,
    getMovieById,
    getGenres
}