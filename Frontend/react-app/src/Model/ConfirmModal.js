import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../Components/Train/css/customBootstrapCss.css'
import {toast} from "react-toastify";

const ConfirmModal = (input) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    // config input from object type to string type then give value to id
    let id = JSON.stringify(input).replace('{"input":', '');
    id = id.replace('}', '');

    const handleClose = () => setShow(false);
    const handleYes = () => {
        setShow(false);
        axios.delete(`http://localhost:8080/post/${id}`,
            {headers: {"Content-Type": "application/json", "Authorization":`Bearer ${localStorage.getItem('token')}` }}
        ).then(response => {
            navigate("/home")

            toast.success('Delete success !', {
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
            toast.error('Delete fail', {
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
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" style={{width:"100px"}} onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do u really want to delete this ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleYes}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ConfirmModal;