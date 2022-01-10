import Users from "./components/usersList/Users";
import Posts from "./components/postList/Posts";
import Comments from "./components/commentsList/Comments";
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <div className="items-wrapper">
                    <div>
                        <Users/>
                    </div>
                    <div>
                        <Posts/>
                    </div>
                </div>
                <div className="item_comment-block">
                    <Comments/>
                </div>

            </div>

        </div>
    );
}

export default App;
