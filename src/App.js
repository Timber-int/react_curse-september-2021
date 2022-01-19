import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {NotFoundPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {UserAlbumPage} from "./pages/userAlbumsPage/UserAlbumPage";
import {PhotosPage} from "./pages/photosPage/PhotosPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}/>
                        <Route path={':id/albums'} element={<UserAlbumPage/>}>
                            <Route path={':albumsId/photos'} element={<PhotosPage/>}/>
                        </Route>
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
