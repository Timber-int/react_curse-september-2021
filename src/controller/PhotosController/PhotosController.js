import React, {useEffect, useState} from 'react';
import {CollectionController} from "../CollectionController/CollectionController";
import {photoService} from "../../service";
import './PhotosController.css';

const categories = [
    {"name": "Все"},
    {"name": "Море"},
    {"name": "Горы"},
    {"name": "Архитектура"},
    {"name": "Города"}
];

const PhotosController = () => {

    const [collections, setCollections] = useState([]);

    const [page, setPage] = useState(0);

    const [searchValue, setSearchValue] = useState('');

    const [categoryId, setCategoryId] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        photoService.getAllPhotos(categoryId, page).then(value => {
            setCollections(value);
        }).finally(() => setIsLoading(false));
    }, [categoryId, page]);

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {
                        categories.map((category, index) => (
                            <li key={category.name}
                                className={categoryId === index ? 'active' : ''}
                                onClick={() => setCategoryId(index)}
                            >
                                {category.name}
                            </li>
                        ))
                    }
                </ul>
                <input
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                    className="search-input"
                    placeholder="Поиск по названию"
                />
            </div>
            <div className="content">
                {
                    isLoading
                        ?
                        <h2>Loading...</h2>
                        :
                        collections
                            .filter(collection => collection.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((collection, index) => (
                                <CollectionController key={index} name={collection.name} images={collection.photos}/>
                            ))

                }
            </div>
            <ul className="pagination">
                {
                    [...Array(5)].map((_, index) => (
                        <li key={index} className={page === index + 1 ? 'active' : ''}
                            onClick={() => setPage(index + 1)}>{index + 1}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export {PhotosController};
