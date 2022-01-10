// 1
// - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
//     Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Users->User
//
//
//
// 2
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (post.service.js) роботи  з post сутностями  з jsonplaceholer (getPosts(),getPost(id)).
//     Використати fetch / axios на вибір
// Створити компонент Posts
// На  рівні Posts, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Post який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Posts->Post
//
//
// 3
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (comment.service.js) роботи  з comment сутностями  з jsonplaceholer (getComments(),getComment(id)).
//     Використати fetch / axios на вибір
// Створити компонент Comments
// На  рівні Comment, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Comment який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Comments->Comment

import Users from "./components/userList/Users";
import Posts from "./components/postsList/Posts";
import Comments from "./components/commentList/Comments";

function App() {
    return (
        <div className="App">
            <Users/>
            <br/>
            <Posts/>
            <br/>
            <Comments/>
        </div>
    );
}

export default App;
