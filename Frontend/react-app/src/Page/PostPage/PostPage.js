import React, {useState, useEffect, useContext} from "react";
import '../../Components/Train/css/content.css'
import httpClient from "../../httpClient/httpClient";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import '../../Components/Train/css/customBootstrapCss.css'
import ConfirmModal from "../../Model/ConfirmModal";
const PostPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let disCancel = false;
        httpClient.get("post/",)
            .then(response => {
                if (!disCancel) {
                    setLoading(false);
                    setPosts(response.data);
                }
            })
            .catch(() => {
                if (!disCancel) {
                    setLoading(false);
                    setError("Something went wrong");
                }
            })
        return () => {
            disCancel = true;
        }
    }, [])
    let idList = [];
    posts.map(post => {
        idList.push(post.id)
    })
    localStorage.setItem('biggestID', idList[idList.length - 1])
    const getDeleteButton = (id) => {
        if (localStorage.getItem('loginStatus') != "2") {
            return null;
        }
        return (
            <div style={{float:"right"}}>
                <ConfirmModal input={id}/>
            </div>
        )
    }
    const getUpdateButton = (id) => {
        if (localStorage.getItem('loginStatus') != "2") {
            return null;
        }
        return (
            <div style={{float:"right"}}>
                <Button variant="outline-primary" onClick={() => {
                    navigate(`/posts/edit/${id}`)
                }} style={{width:"100px"}}>Update</Button>
            </div>
        )
    }
    if (posts.length > 0) {
        localStorage.setItem('postsLength', posts.length)
    }

    const checkLogin = (item) => {
        if (localStorage.getItem('loginStatus') === "2") {
            return `/posts/${item.id}`
        } else {
            localStorage.setItem('loginStatus', '1');
            return '/login'
        }
    }

    if (posts.length === 0) {
        return (
            <div className="main-content">
                <div className="forCss">
                    <img src={require("./coding3.jpg")} style={{marginLeft:"220px", marginTop:"50px", marginBottom:"50px"}} alt=""/>
                </div>

            </div>
        )
    } else {
        return (
            <div className="main-content">
                <div className="ForCss">
                    {posts.map((item, index) => (
                        <div className="list_child" key={index}>
                            <div className="row">
                                <div className="col-8">
                                    <div className="title">
                                        <Link to={checkLogin(item)} state={{currentIndex: index, listID: idList}}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    <div className="preview">{item.description}</div>
                                    <div className="more">Created at {item.createdAt} . 8 mins read</div>
                                </div>
                                <div className="col-1">  </div>
                                <div className="col-3">
                                    {getUpdateButton(item.id, index)}
                                    <br/>
                                    <br/>
                                    <br/>
                                    {getDeleteButton(item.id)}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{float:"right"}}>
                        <Button variant="outline-primary" onClick={() => {
                            if (localStorage.getItem('loginStatus') === "2"){
                                navigate(`/postadd`)
                            } else {
                                localStorage.setItem('loginStatus', '1');
                                navigate('/login')
                            }
                        }}>Add posts</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage;
