import './LoginPage.css'
import {useState} from "react";
import {validatePassword, validateUsername} from "../../Validate/validate";
import {Form} from 'react-bootstrap';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
const LoginPage = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const [touched, setTouched] = useState({
        username: false,
        password: false
    })

    const errorUsername = validateUsername(values.username);
    const errorPassword = validatePassword(values.password);

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
        axios.post("http://localhost:8080/authenticate", { "username" : `${values.username}`,
            "password" : `${values.password}`}
            , {headers: {"Content-Type": "application/json"}})
            .then(response => {
                if (response.request.status === 200) {
                    localStorage.setItem('username', values.username);
                    localStorage.setItem('password', "$2a$10$2Zxn0iDAvSDKFITbsyZMferXdEMMomq5USCWpHFNR1XNMwMPoelvK");
                    localStorage.setItem('loginStatus', '2');
                    localStorage.setItem('token', response.data.jwttoken);
                    navigate("/home")
                    toast.success("Login success", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }).catch(function (error) {
                if (error.request.status === 401) {
                    toast.error("Check your username and password then try again !", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.error("Server can not be reached", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    localStorage.removeItem('loginStatus');
                    navigate("/home")
                }
        })

    }
    const formValid = !errorUsername && !errorPassword;
    return (
        <div className={"allScreen"}>
            <div className="login-box">
                <h2>Login</h2>
                <Form onSubmit={handleSubmit} validated={false}>
                    <Form.Group className="mb-3">
                        {/*Check Email*/}
                        <Form.FloatingLabel controlId="floatingInput" label="Username">
                            <Form.Control
                                required
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="username"
                                placeholder="Enter Username"
                                isValid={touched.username && !Boolean(errorUsername)}
                                isInvalid={touched.username && Boolean(errorUsername)}
                            />
                            <Form.Control.Feedback type="invalid">{errorUsername}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Username look goods</Form.Control.Feedback>
                        </Form.FloatingLabel>
                        <br/>
                        <Form.FloatingLabel controlId="floatingInput" label="Password" datatype="password">
                            <Form.Control
                                required
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Enter Password"
                                isValid={touched.password && !Boolean(errorPassword)}
                                isInvalid={touched.password && Boolean(errorPassword)}
                            />
                            <Form.Control.Feedback type="invalid">{errorPassword}</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Valid password</Form.Control.Feedback>
                        </Form.FloatingLabel>
                    </Form.Group>
                    <button disabled={!formValid} type="submit" className="btn btn-dark">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    );

}
export default LoginPage;