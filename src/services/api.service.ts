import {baseUrl, imgUrl, options} from "@/constants/constants";
import {dataProps, IResMovieProps} from "@/interfaces/interfaces";
import {IGenre} from "@/models/IGenre";
import {IMovie} from "@/models/IMovie";

const getData = async ():Promise<dataProps> => {
    return await fetch(baseUrl + '/discover/movie',
        options).then(res => res.json());
}


const getTotalPages = async (): Promise<number> => {
    const total = await getData();
    return total.total_pages;
}

const getAllMovies = async (page: number = 1): Promise<IMovie[]> => {
    const totalPages = await getTotalPages();
    const allMovies:IMovie[] = [];

    for (let i = page; i <= totalPages; i++) {
        try {
            const response = await getMoviesByPage(i);

            allMovies.push(...response);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
            break;
        }
    }

    return allMovies;
}

const getTopRatedMovies = async (sliceArg: number): Promise<IMovie[]> => {
    const allMovies = await getAllMovies();

    const sortedMovies = allMovies.length > 0 ?
        allMovies.sort((a, b) => b.vote_average - a.vote_average) : [];

    return sortedMovies.slice(0, sliceArg);
}

const getMoviesByPage = async (page: number = 1): Promise<IMovie[]> => {
    const response = await fetch(baseUrl + '/discover/movie?page=' + page,
        options).then(res => res.json());
    return response.results;
}


const getAllMoviesByGenre = async (genreId: string, page: number = 1): Promise<IMovie[]> => {
    const response: dataProps = await fetch(baseUrl + '/discover/movie?with_genres=' + genreId + '&page=' + page,
        options).then(res => res.json());
    return response.results;
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
    getData,
    getTotalPages,
    getAllMovies,
    getTopRatedMovies,
    getAllMoviesByGenre,
    getMoviesByPage,
    getMovieById,
    getGenres
}