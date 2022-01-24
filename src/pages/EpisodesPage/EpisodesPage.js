import React, {useEffect, useState} from 'react';
import {contentService} from "../../services/content-axios.service";
import {Episodes} from "../../components/Episodes/Episodes";

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
            <Episodes episodes={episodes}/>

            <div>
                {
                    newArray.map(element => <button key={element} onClick={() => setPage(element)}>{element}</button>)
                }
            </div>
        </div>
    );
};

export {EpisodesPage};