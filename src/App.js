import React from "react";

import {Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, NotFoundPage, PostsPage, UsersPage} from "./pages";


const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export {App};