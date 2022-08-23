import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const ClickHandle = () => {
        navigate("/post")
    }
    const List = [
        {
            number: "13",
            text: "Github Repositories",
            itemName: "fa-solid fa-fire-flame-curved fa-2x",
        },
        {
            number: "2",
            text: "Spring Projects",
            itemName: "fa-solid fa-rocket fa-2x",
        },
        {
            number: "320",
            text: "European, American and Asian\n novels read",
            itemName: "fa-solid fa-mug-hot fa-2x",
        },
        {
            number: "4",
            text: "Years in Steam Family",
            itemName: "fa-brands fa-steam fa-2x",
        },
    ]
    return (
        <div style={{minHeight: "450px", height:"fit-content"}}>
            <br/><br/>
            <div className="container">
                <div className="row" style={{minHeight:"350px", height:"fit-content"}}>
                    <div className="col-3">
                            <img src={require("./dj-loli.gif")} style={{height:"210px", width:"220px"}} className="rounded-circle" alt="..."/>
                    </div>
                    <div className="col-9">
                        <div className="border border-success p-2 border-opacity-10" style={{borderRadius: "25px",
                            minHeight:"350px", height:"fit-content", backgroundColor:"white", border: "2px solid #183153",
                            padding: "20px"}}>
                            <div className="row" style={{marginTop:"20px", marginLeft:"20px"}}>
                                <div className="col-4">
                                    <p className="fw-bolder" style={{fontSize: "16px", fontFamily:"", lineHeight:"25px", color:"#183153"}}>Hello, I'm Nguyen Khanh Quan.I am a 3rd year student majoring in Information Technology,
                                        UET, Vietnam National University, Hanoi. My hobbies are reading books and exploring new things</p>
                                    <div className="">
                                        <button type="button" className="btn btn-outline-danger" onClick={ClickHandle}>Get CV</button>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-7">
                                    <br/>
                                    <div className="wrapper" style={{lineHeight:"2px"}}>
                                        <p style={{fontSize:"16px"}}><b>Networking</b></p>
                                        <p style={{fontSize:"14px"}}>60%</p>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar"
                                                 style={{width: "60%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="wrapper" style={{lineHeight:"2px"}}>
                                        <p style={{fontSize:"16px"}}><b>Coding</b></p>
                                        <p style={{fontSize:"14px"}}>70%</p>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                                                 style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="wrapper" style={{lineHeight:"2px"}}>
                                        <p style={{fontSize:"16px"}}><b>Reading Books</b></p>
                                        <p style={{fontSize:"14px"}}>80%</p>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar"
                                                 style={{width: "80%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" style={{height: 70}}></div>
                <div className="row" style={{minHeight:"200px", height:"fit-content"}}>
                    {
                        List.map((item, index) => (
                            <div className="col-3" key={index}>
                                <div className="wrapped-item">
                            <span className={item.itemName}>
                                </span>
                                    <div className="details">
                                        <h3>{item.number}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default About;