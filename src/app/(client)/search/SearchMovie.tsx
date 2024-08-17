'use client';

import React, {FC, useState} from 'react';
import { IMovie } from "@/models/IMovie";

interface SearchProps {
    initialResults: IMovie[];
    initialQuery: string;
}

const Search: FC<SearchProps> = ({ initialResults, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<IMovie[]>(initialResults);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const filteredMovies = initialResults.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            <div>
                {results.length > 0 ? (
                    results.map(movie => (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                    ))
                ) : (
                    <h6>No results found</h6>
                )}
            </div>
        </div>
    );
};

export default Search;








