import {baseUrl, imgUrl, options} from "@/constants/constants";
import {IResMovieProps, Interfaces} from "@/interfaces/interfaces";

const getAllMovies = async (page: number = 1): Promise<Interfaces>  => {


    let response:Interfaces = await fetch(baseUrl + '/discover/movie?page=' + page,
        options).then(res => res.json());

    // console.log(response)
    return response;

}

const getMovieById = async (id: number): Promise<IResMovieProps> => {
    let response = await fetch(baseUrl + '/movie/' + id,
        options).then((res) => res.json());

    const posterUrl = `${imgUrl}${response.belongs_to_collection.poster_path}`; //todo
    const backdropUrl = `${imgUrl}${response.belongs_to_collection.backdrop_path}`;

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