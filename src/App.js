import './App.css';
import {Route, Routes} from "react-router-dom";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage";
import {EpisodesPageDetails} from "./pages/EpisodesPageDetails/EpisodesPageDetails";
import {Layout} from "./components/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<EpisodesPage/>}/>
                    <Route path={'episode/:id'} element={<EpisodesPageDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
