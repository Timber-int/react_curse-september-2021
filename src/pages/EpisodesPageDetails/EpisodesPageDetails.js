import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {characterService} from "../../services/character-axios.service";
import {Characters} from "../../components/Characters/Characters";

const EpisodesPageDetails = () => {
    const [charactersValue, setCharactersValue] = useState([]);

    const {state} = useLocation();

    const {characters} = state;

    const idsArray = [];

    characters.map(character => {
        // console.log(character.split('/').pop());
        idsArray.push(character.split('/').pop())
    });

    useEffect(() => {
        characterService.getById(idsArray).then(value => setCharactersValue([...value]));
    }, []);

    return (
        <div>
            <Characters charactersValue={charactersValue}/>
        </div>
    );
};

export {EpisodesPageDetails};