import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {validateID, validateNotNull, validatePassword, validateUsername} from "../../Validate/validate";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {toast} from "react-toastify";
import React from "react";


const AddPost = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        postId:"",
        title:"",
        description:"",
        content:""
    });
    const [touched, setTouched] = useState({
        postId: false,
        title: false,
        description: false,
        content: false
    })

    const errorPostId = validateID(values.postId);
    const errorTitle = validateNotNull(values.title);
    const errorDescription = validateNotNull(values.description);
    const errorContent = validateNotNull(values.content);

    const handleChange = evt => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleBlur = evt => {
        setTouched({
            ...touched,
            [evt.target.name]: true
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post("http://localhost:8080/post/",
            { "id" : `${values.postId}`,
            "title" : `${values.title}`,
            "description": `${values.description}`,
                "content": `${values.content}`,
                "author" : {
                "username":`${localStorage.getItem('username')}`,
                    "password":`${localStorage.getItem('password')}`
                }
            },
            {headers: {"Content-Type": "application/json", "Authorization":`Bearer ${localStorage.getItem('token')}` }}
        ).then(response => {
            navigate("/posts")
            toast.success("Add post success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(function (error) {
            navigate("/home")
            toast.error("Add post fail", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }
    const formValid = !errorPostId && !errorTitle && !errorContent && !errorDescription;
    return (
        <div className="container-sm" style={{minHeight:"450px"}}>
            <div className="wrapped-box" style={{marginTop:"20px"}}>
                <div className="beginSentence" style={{marginLeft:"220px"}}>
                    <h3 style={{fontSize:"20px"}}>Fill out the form to create a new post</h3>
                </div>
            </div>
            {/*Form create post*/}
            <div className="inputForm" style={{borderRadius: "25px",borderBlockColor:"#E0EEE0", padding:"20px"}}>
                <br/>
                <Form onSubmit={handleSubmit} validated={false}>
                    <Form.Group className="mb-3">
                        <Form.FloatingLabel controlId="floatingInput" label="PostID">
                            <Form.Control
                                required
                                name="postId"
                                value={values.postId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="id"
                                placeholder="Enter postID"
                                isValid={touched.postId && !Boolean(errorPostId)}
                                isInvalid={touched.postId && Boolean(errorPostId)}
                            />
                            <Form.Control.Feedback type="invalid">{errorPostId}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looking good</Form.Control.Feedback>
                        </Form.FloatingLabel>
                        <br/>
                        <Form.FloatingLabel controlId="floatingInput" label="Title">
                            <Form.Control
                                required
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="title"
                                placeholder="Enter title"
                                isValid={touched.title && !Boolean(errorTitle)}
                                isInvalid={touched.title && Boolean(errorTitle)}
                            />
                            <Form.Control.Feedback type="invalid">{errorTitle}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looking good</Form.Control.Feedback>
                        </Form.FloatingLabel>
                        <br/>
                        <Form.FloatingLabel controlId="floatingInput" label="Description">
                            <Form.Control
                                required
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="description"
                                placeholder="Enter description"
                                isValid={touched.description && !Boolean(errorDescription)}
                                isInvalid={touched.description && Boolean(errorDescription)}
                            />
                            <Form.Control.Feedback type="invalid">{errorDescription}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looking good</Form.Control.Feedback>
                        </Form.FloatingLabel>
                        <br/>
                        <Form.FloatingLabel controlId="floatingInput" label="Content">
                            <Form.Control
                                required
                                name="content"
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="content"
                                placeholder="Enter content"
                                isValid={touched.content && !Boolean(errorContent)}
                                isInvalid={touched.content && Boolean(errorContent)}
                            />
                            <Form.Control.Feedback type="invalid">{errorContent}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Looking good</Form.Control.Feedback>
                        </Form.FloatingLabel>
                        <br/>
                    </Form.Group>
                    <br/>
                    <Button disabled={!formValid} type="submit" variant="outline-secondary">Submit</Button>
                    <Button style={{float:"right", width: "100px"}} variant="outline-primary" onClick={ () => {
                        navigate("/posts")
                    }}>Cancel</Button>
                    <br/>
                </Form>
            </div>
        </div>
    );
}
export default AddPost;