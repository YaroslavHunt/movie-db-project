import React, {FC} from "react";
import Search from "@/app/(client)/search/SearchMovie";
import {IMovie} from "@/models/IMovie";


const SearchServer: FC<{initialResults: IMovie[], initialQuery: string}> = ({ initialResults, initialQuery }) => {
    return <Search initialResults={initialResults} initialQuery={initialQuery} />;
};


export default SearchServer;









