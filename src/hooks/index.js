export * from './useGenres';

export const useGenres = (selectedGenres) => {
    if (selectedGenres.length < 1) return '';

    const genreId = selectedGenres.map((genre) => genre.id);
    return genreId.reduce((acc, curr) => acc + ',' + curr);
};

