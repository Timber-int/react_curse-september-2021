import React, {useEffect, useState} from 'react';

import {contentService} from "../../services/content-axios.service";
import {Episodes} from "../../components/Episodes/Episodes";
import {Pagination} from "../../components/Pagination/Pagination";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    const [page, setPage] = useState(1);
    console.log(page);

    useEffect(() => {
        contentService.getAll(page).then(value => setEpisodes([...value.results]));
    }, [page]);


    return (
        <div>
            <div>
                <center><h1>Riki and Morty Episodes</h1></center>
            </div>
            <Episodes episodes={episodes}/>
            <Pagination setPage={setPage} page={page}/>
        </div>
    );
};

export {EpisodesPage};