import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Container} from "@material-ui/core";

import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import "./App.css";

function App() {
    return (
        <div>
            <Header/>
            <div className="App">
                <Container>
                    <Routes>
                        <Route path="/" element={<Trending/>}/>
                        <Route path="/movies" element={<Movies/>}/>
                        <Route path="/series" element={<Series/>}/>
                        <Route path="/search" element={<Search/>}/>
                    </Routes>
                </Container>
            </div>
            <SimpleBottomNavigation/>
        </div>
    );
}

export default App;
