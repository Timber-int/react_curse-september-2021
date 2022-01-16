import React from 'react';

import {img_300, unavailable} from "../../config/config";
import "./SingleContent.css";
import {Badge} from "@material-ui/core";
import ContentModal from "../ContentModel/ContentModel";

const SingleContent = (
    {
        movie: {
            id,
            poster_path,
            title,
            name,
            first_air_date,
            release_date,
            vote_average
        },
        media_type,
    }
    ) => {

        return (
            <ContentModal media_type={media_type} id={id}>
                <Badge
                    badgeContent={vote_average}
                    color={vote_average > 6 ? "primary" : "secondary"}
                />
                <img className="poster"
                     src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                     alt={title}
                />

                <b className="title">{title}</b>

                <span className="subTitle">
                    {media_type === "tv" ? "TV Series" : "Movie"}

                    <span className="subTitle">
                        {first_air_date || release_date}
                    </span>
                </span>
            </ContentModal>
        );
    }
;

export default SingleContent;