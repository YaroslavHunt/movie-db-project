const baseUrl = 'https://api.themoviedb.org/3';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWVhYjI2MmI0NmFjNzQ0MGYwZTIzNjkyZDc0ZmE1OCIsIm5iZiI6MTcyMzM4OTY2MS45MTIyMiwic3ViIjoiNjZiOGNkMzliODJlYjgxNzg0MTcxNDVlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zDJ7MjphlP95DqcZhJzyeUeWJCKzFw7_g7o96baV4YU'
    }
};

export {
    baseUrl,
    imgUrl,
    options
}