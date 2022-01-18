import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {Layout} from "./components/Layout/Layout";
import {AboutPage, HomePage, LoginPage, NoteFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";


function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>
                    }/>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>

                    {/*Navigate використовується для того щоб при переході на різні url перейти на одну і ту саму сторінку*/}
                    <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
                    <Route path={'*'} element={<NoteFoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
