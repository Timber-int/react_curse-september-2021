import React, {useEffect, useState} from 'react';

import {contentService} from "../../services/content-axios.service";
import {Episodes} from "../../components/Episodes/Episodes";
import css from "./EpisodesPage.module.css";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => {
        contentService.getAll(page).then(value => setEpisodes([...value.results]));
    }, [page]);

    const newArray = [];

    for (let i = 1; i <= 3; i++) {
        newArray.push(i);
    }

    return (
        <div>
            <div>
                <center><h1>Riki and Morty Episodes</h1></center>
            </div>
            <Episodes episodes={episodes}/>

            <div className={css.wrapper}>
                {
                    newArray.map(element => <button key={element} onClick={() => setPage(element)}>{element}</button>)
                }
            </div>
        </div>
    );
};

export {EpisodesPage};