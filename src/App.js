import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {UsersPage} from "./pages/usersPage/UsersPage";
import {PostsPage} from "./pages/postsPage/PostsPage";
import {NotFoundPage} from "./pages/notFoundPage/NotFoundPage";
import {PostDetailsPage} from "./pages/postDetailsPage/PostDetailsPage";
import {UserDetailsPage} from "./pages/userDetailsPage/UserDetailsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}/>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}/>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
