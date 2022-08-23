import React, {useEffect, useState} from "react";
import '../../Components/Train/css/content.css'
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import httpClient from "../../httpClient/httpClient";
import {Button} from "react-bootstrap";

const DetailPage = ({route}) => {
    const location = useLocation();
    const {currentIndex, listID} = location?.state
    const navigate = useNavigate();
    const [eachPost, setEachPost] = useState({
        id: null,
        title: null,
        description: null,
        content: null,
        author: null,
        createdAt: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const {postId} = useParams();
    useEffect(() => {
        let disCancel = false;
        httpClient.get(`post/${postId}`,)
            .then(response => {
                if (!disCancel) {
                    setLoading(false);
                    setEachPost({
                        id: postId,
                        title: response.data.title,
                        description: response.data.description,
                        content: response.data.content,
                        author: response.data.author.username,
                        createdAt: response.data.author.birthDate
                    });
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
    }, [postId])
    const ClickHandle = () => {
        navigate("/posts")
    }
    const getPreviousButton = () => {
        if (currentIndex <= 0) {
            return null;
        } else return (
            <div style={{float: "left"}}>
                <Link to={`/posts/${listID[currentIndex - 1]}`}
                      state={{currentIndex: currentIndex - 1, listID: listID}}>
                    <Button variant="outline-primary">Previous</Button>
                </Link>
            </div>
        )
    }

    const getNextButton = () => {
        if (currentIndex >= parseInt(localStorage.getItem('postsLength')) - 1) {
            return null;
        } else return (
            <div className="buttonNext" style={{float: "right"}}>
                <Link to={`/posts/${listID[currentIndex + 1]}`}
                      state={{currentIndex: currentIndex + 1, listID: listID}}>
                    <Button variant="outline-primary">Next</Button>
                </Link>
            </div>
        )
    }
    return (
        <div className="main-content">
            <div className="ForCss">
                <div className="list_child">
                    <div className="title">{eachPost.title}</div>
                    <div className="preview">ID: {eachPost.id}</div>
                    <div className="preview">{eachPost.content}</div>
                    <div className="more">Post by {eachPost.author} at {eachPost.createdAt}</div>
                </div>
                <div>
                    <Button variant="outline-primary" onClick={ClickHandle}>View all posts</Button>
                </div>
                <div className="spacer" style={{height: "70px"}}></div>
                <div className="pageButton" style={{height: "fit-content"}}>
                    {getPreviousButton()}
                    {getNextButton()}
                </div>

            </div>
        </div>
    )
}
export default DetailPage;