import React, {useEffect, useState} from 'react';
import axios from "axios";

import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Trending.css";

const Trending = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setContent(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchTrending().then()
    }, []);

    return (
        <div>
            <span className="pageTitle">trending</span>

            <div className="trending">
                {
                    content && content.map(movie => <SingleContent key={movie.id} movie={movie}/>)
                }
            </div>

            <CustomPagination/>
        </div>
    );
};

export default Trending;