import './App.css';
import React from "react";
import Header from "./Components/Train/js/Header";
import Footer from "./Components/Train/js/Footer";
import Contact from "./Page/ContactPage/Contact";
import About from "./Page/About/About";
import {Routes, Route, Outlet, useLocation} from "react-router-dom";
import PostPage from "./Page/PostPage/PostPage";
import LoginPage from "./Page/LoginPage/LoginPage";
import EditPostPage from "./Page/EditPostPage/EditPostPage";
import AddPost from "./Page/AddPostPage/AddPost";
import DetailPage from "./Page/DetailPage/DetailPage";
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
import Homepage from "./Page/Homepage/Homepage";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    const sampleLocation = useLocation();
    const current = sampleLocation.pathname;
    if (current != "/login" && localStorage.getItem('loginStatus') === "1"){
        localStorage.removeItem('loginStatus');
    }
    const pages =["/home", "/contact", "/about", "/posts", "/login","/postadd", "/postedit"]
    let biggestID = parseInt(localStorage.getItem('biggestID'));
    // let postLength = 50;
    for (let i = 1; i <= biggestID; i++) {
        pages.push("/posts/" + i);
        pages.push("/posts/edit/" + i);
    }

    if (pages.includes(current)) {
        return (
            <div>
                    <Header/>
                    <Routes>
                        <Route path="/home" element={<Homepage/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="postadd" element={<AddPost/>}/>
                        <Route path="postedit" element={<EditPostPage/>}/>
                        <Route path="postdetail" element={<DetailPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="posts" element={<Outlet/>}>
                            <Route
                                index
                                element={<PostPage/>}
                            />
                            <Route
                                path=":postId"
                                element={<DetailPage/>}
                            />
                            <Route
                                path="edit/:postId"
                                element={<EditPostPage/>}
                            />
                        </Route>
                    </Routes>
                    <Footer/>
                <ToastContainer />
            </div>
        );
    }
    return (
            <Routes>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        )
}

export default App;
