import React from 'react';
import { IGenre } from "@/models/IGenre";
import { getGenres } from "@/services/api.service";
import AllGenresClient from "@/app/(client)/genres/AllGenresClient";

const AllGenresServer = async () => {
    const genres: IGenre[] = await getGenres();

    return (
        <AllGenresClient genres={genres} />
    );
};

export default AllGenresServer;