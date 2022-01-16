import React, {useEffect, useState} from 'react';
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import useGenres from "../../hooks/useGenre";


const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState(500);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreForURL = useGenres(selectedGenres);


    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
        );

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies().then();
        // Слідкуємо і робимо перерендер сторінки коли змінюється номер сторінки або вибраний жанр;
    }, [page, genreForURL]);

    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres type="movie"
                    selectedGenres={selectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setSelectedGenres={setSelectedGenres}
                    setPage={setPage}
            />

            <div className="trending">
                {
                    content && content.map(movie => <SingleContent key={movie.id} movie={movie} media_type="movie"/>)
                }
            </div>
            {
                numOfPages > 1 && <CustomPagination setPage={setPage} numberOfPages={500}/>
            }
        </div>
    );
};

export default Movies;