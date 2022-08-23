import {useState} from "react";
import {validateEmail, validateNumberPhone} from "../../Validate/validate";
import { Button, Form } from 'react-bootstrap';
const Contact = () => {
    const [values, setValues] = useState({
        email: "",
        numberPhone: ""
    });

    const [touched, setTouched] = useState({
        email: false,
        numberPhone: false
    })

    const errorEmail = validateEmail(values.email);
    const errorNumberPhone = validateNumberPhone(values.numberPhone);

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
    }
    const formValid = !errorEmail && !errorNumberPhone;
    return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{backgroundColor:"#B5B5B5", height:"fit-content", minHeight:"450px"}}>
        <div className="carousel-inner">
                <div className="carousel-item active">
                    {/*Form submit */}
                    <br/><br/>
                    <div style={{marginLeft: "280px", marginRight: "190px"}}>
                        {/*<img src="..." className="d-block w-100" alt="..."/>*/}
                        <div>
                            <p style={{fontSize:"20px"}}>U can also fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        </div>
                        <Form onSubmit={handleSubmit} validated={false}>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <Form.Group className="mb-3">
                                {/*Check Email*/}
                                <Form.FloatingLabel controlId="floatingInput" label="Email">
                                <Form.Control
                                    required
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email"
                                    placeholder="Enter email"
                                    isValid={touched.email && !Boolean(errorEmail)}
                                    isInvalid={touched.email && Boolean(errorEmail)}
                                />
                                <Form.Control.Feedback type="invalid">{errorEmail}</Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">Email look goods</Form.Control.Feedback>
                                </Form.FloatingLabel>
                                <br/>
                                {/*Check NumberPhone*/}
                                <Form.FloatingLabel controlId="floatingInput" label="NumberPhone">
                                    <Form.Control
                                        required
                                        name="numberPhone"
                                        value={values.numberPhone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="numberPhone"
                                        placeholder="Enter NumberPhone"
                                        isValid={touched.numberPhone && !Boolean(errorNumberPhone)}
                                        isInvalid={touched.numberPhone && Boolean(errorNumberPhone)}
                                    />
                                    <Form.Control.Feedback type="invalid">{errorNumberPhone}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Valid number</Form.Control.Feedback>
                                </Form.FloatingLabel>
                            </Form.Group>
                            <div className="form-floating">
                                <input type="message" className="form-control" id="floatingPassword" placeholder="question"/>
                                <label htmlFor="floatingPassword">Message</label>
                            </div>
                            <br/>
                            <Button disabled={!formValid} type="submit" variant="outline-secondary">Submit</Button>
                            <br/>
                        </Form>
                    </div>
            </div>
            <div className="carousel-item">
                <br/><br/>
                <div style={{marginLeft: "280px", marginRight: "190px"}}>
                    <div style={{fontSize:"30px"}}>
                        <p>Feel free to contact with me through these social media:</p>
                    </div>
                    <br/><br/>
                    <div style={{float:"left",width:"fit-content", blockSize:"fit-content"}}>
                        <a href={"https://twitter.com/nkq232"} target={"_blank"} rel="noreferrer">
                            <img src={require("./wallpaperflare.com_wallpaper.jpg")} style={{height:"144px", width:"230px"}} alt=""/>
                        </a>
                    </div>
                    <div style={{float: "left", width:"fit-content", blockSize:"fit-content"}}>
                        <a href={"https://www.linkedin.com/in/nguy%E1%BB%85n-kh%C3%A1nh-qu%C3%A2n-a3710a23a/"} target={"_blank"} rel="noreferrer">
                            <img src={require("./linkedin.jpg")} style={{height:"144px", width:"230px"}} alt=""/>
                        </a>
                    </div>
                    <div style={{float: "left", width:"fit-content", blockSize:"fit-content"}}>
                        <a href={"https://steamcommunity.com/profiles/76561198988064423/"} target={"_blank"} rel="noreferrer"><img src={require("./steam.jpg")} style={{ height:"144px", width:"230px"}} alt=""/></a>
                    </div>
                    <div style={{float: "left", width:"fit-content", blockSize:"fit-content"}}>
                        <a href={"https://www.instagram.com/kq2.32/"} target={"_blank"} rel="noreferrer"><img src={require("./insta.jpg")} style={{ height:"144px", width:"230px"}} alt=""/></a>
                    </div>
                </div>
                <i className="bi bi-steam"></i>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}
export default Contact;