import { getMoviesByPage } from '@/services/api.service';
import TopRatedMoviesList from '@/components/movies-list/TopRatedMoviesList';
import { Interfaces } from '@/interfaces/interfaces';

export default async function Home() {
    const moviesData: Interfaces = await getMoviesByPage();

    return (
        <main>
            <TopRatedMoviesList {...moviesData} />
        </main>
    );
}