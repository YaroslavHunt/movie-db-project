'use client';

import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import styles from './SerachMovie.module.css';
import Link from "next/link";

interface SearchProps {
    initialResults: IMovie[];
    initialQuery: string;
}

const Search: FC<SearchProps> = ({initialResults, initialQuery}) => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filteredMovies = initialResults.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredMovies);
    };


    useEffect(() => {
        handleSearch();
    }, [query]);

    return (
        <div className={styles.search_container}>
            <div className={styles.search_bar}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for movies"
                    className={styles.search_input}
                />
                <button onClick={handleSearch} disabled={loading} className={styles.search_button}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {query && results.length === 0 && (
                <h6 className={styles.no_results}>No results found</h6>
            )}
            {query && results.length > 0 && results.map(movie => (
                <div key={movie.id} className={styles.search_result_item}>
                    <Link href={{
                        pathname: '/movie/' + movie.id,
                        query: {data: JSON.stringify(movie)}
                    }}>{movie.original_title}</Link>
                </div>
                ))}
</div>
)
;
}
;

export default Search;










