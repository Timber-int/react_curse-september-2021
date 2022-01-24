import React, {useEffect, useState} from 'react';
import {contentService} from "../../services/content-axios.service";
import {Episodes} from "../../components/Episodes/Episodes";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        contentService.getAll().then(value => setEpisodes([...value.results]));
    }, []);

    return (
        <div>
            <Episodes episodes={episodes}/>
        </div>
    );
};

export {EpisodesPage};