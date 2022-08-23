import React, {useContext} from "react";
import '../css/header.css'
import ForContact from '../js/fox.jpg'
import forPost from '../js/123.jpg'
import fly from '../js/fly.jpg'
import japan from '../js/japan.jpg'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {NavDropdown} from "react-bootstrap";
import brain from './brain.jpg';
import {useState} from "react";
import Music from "../../../Music/Music";
import {toast} from "react-toastify";

const Header = () => {
    const sampleLocation = useLocation();
    const navigate = useNavigate();
    const current = sampleLocation.pathname;
    let image = null;
    let message = "";
    let littleMessage = "";
    switch (current) {
        case "/postadd":
            image = brain;
            message = "Create your post"
            littleMessage = "Begin new journey"
            break;
        case "/posts":
            image = forPost;
            message = "Post";
            littleMessage = "Where the creation begins "
        break;
        case "/about" :
            image = fly;
            message = "About Me";
            littleMessage = "Wanna know more ?"
            break;
        case "/contact" :
            image = ForContact;
            message = "Contact Me";
            littleMessage = "Wanna get in touch ?"
            break;
        case "/home" :
            image = japan;
            message = "Quan Nguyen";
            if (localStorage.getItem('loginStatus') === null) {
                littleMessage = "Welcome Stranger";
            } else {
                littleMessage = "Welcome " + localStorage.getItem('username');
            }
            break;
        default :
            image = brain;
            message = "Posts";
            littleMessage = "Another View"
    }
    const ClickHandle = () => {
        navigate("/home")
    }

    const getLoginPage = () => {
        if (localStorage.getItem('loginStatus') === null) {
            return (
                <Nav.Link as={Link} to = "/login" onClick={() => {
                    // check.isLogin = 1;
                    localStorage.setItem('loginStatus', '1');
                }} className="Link"
                          style={{color: "#363636", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>LOGIN
                </Nav.Link>
            )
        } else {
            return (
            <NavDropdown title={localStorage.getItem('username')} id="navbarScrollingDropdown"
                         style={{color: "#363636", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>
                <NavDropdown.Item href="#" onClick={() => {
                    localStorage.removeItem('username');
                    localStorage.removeItem('loginStatus');
                    navigate("/home")
                    toast("🦄 U are logged out", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }}>Logout</NavDropdown.Item>
            </NavDropdown>
            )
        }
    }
    if (localStorage.getItem('loginStatus') === "1") {
        return null;
    }
    return (
        <>
            <div className="header" id="changeBackground" style={{ backgroundImage: `url(${image})` }}>
            <div className="black"></div>
            <div className="navbar">
                <div className="left">
                    <div className="logo">
                        <img onClick={ClickHandle} src={require('./sample_test-removebg.png')} alt=""/>
                        <Music/>

                    </div>
                </div>
                <div className="right" style={{width: "fit-content"}}>
                    <div className="menu">
                        <Navbar bg="light" expand="lg" style={{borderRadius: "25px", padding:"20px", background:"#B5B5B5"}}>
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link as={Link} to = "/home" className="Link"
                                                  style={{color: "#183153", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>HOME
                                        </Nav.Link>
                                        <Nav.Link as={Link} to = "/about" className="Link"
                                                  style={{color: "#183153", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>ABOUT
                                        </Nav.Link>
                                        <Nav.Link as={Link} to = "/posts" className="Link"
                                                  style={{color: "#183153", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>POSTS
                                        </Nav.Link>
                                        <Nav.Link as={Link} to = "/contact" className="Link"
                                                  style={{color: "#183153", fontFamily: "'Helvetica Neue', sans-serif", fontWeight: "bold"}}>CONTACT
                                        </Nav.Link>
                                        {getLoginPage()}
                                        <Nav.Link className="spacer_bar">       </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>{message}</h1>
                <p>{littleMessage}</p>
            </div>
        </div>
        </>
    );
}
export default Header;