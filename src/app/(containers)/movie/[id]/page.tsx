import React from 'react';
import {getMovieById} from "@/services/api.service";

interface Params {
    searchParams: {
        data?:string
        id?: string;
    }
}

const MoviePage = async ({searchParams}: Params) => {

    let movie1;

    if(searchParams && searchParams.data) {
        movie1 = JSON.parse(searchParams.data)
    }

    const {movie, posterUrl, backdropUrl} = await getMovieById(+movie1.id);

    return (
        <div>
            <img src={posterUrl} alt={movie1.title}/>
        </div>
    );
};

export default MoviePage;

//todo