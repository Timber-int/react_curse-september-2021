import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums-axios.service";
import {Albums} from "../../components/Albums/Albums";


const UserAlbumPage = () => {
    const [albums, setAlbums] = useState([]);

    const params = useParams();

    const {id} = params;

    useEffect(() => {
        albumsService.getById(id).then(value => setAlbums([...value]));
    }, [id]);

    return (<div>
            <div>
                <Albums albums={albums}/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export {UserAlbumPage};