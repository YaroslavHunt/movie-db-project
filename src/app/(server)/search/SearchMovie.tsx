import {getAllMovies} from '@/services/api.service';
import React, {FC} from "react";
import Search from "@/app/(client)/search/SearchMovie";
import {Interfaces} from "@/interfaces/interfaces";


const SearchServer:FC<Interfaces> = async (results) => {
    try {
        const { allMovies } = await getAllMovies(1, results);

        return <Search initialResults={allMovies} initialQuery=""/>;
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        return <div>Error loading movies</div>;
    }
}

export default SearchServer;








