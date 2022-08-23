import React from "react";
import '../../Components/Train/css/content.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Type from "../../Animation/Type";
import Img_1 from './twin.jpg'
import Img_2 from './1_pic_meme.jpg'
import Img_3 from './one_piece.jpg'

const Homepage = () => {
    const navigate = useNavigate();
    const list = [
        {
            url: "/about",
            title: "ABOUT",
            img: Img_1,
            description: "Hi there ! I will be your companion on this journey.\n" +
                "                                            Do you wonder who I am ? Click this card to find out, i am looking\n" +
                "                                        forward to seeing u soon 🥰",
            text: "Last updated 3 mins ago"

        },
        {
            url: "/posts",
            title: "POST",
            img: Img_2,
            description: "I know the card looks completely irrelevant with topic but just click this card and wait for thing happens next 😇",
            text: "Last updated 3 mins ago"

        },
        {
            url: "/contact",
            title: "CONTACT",
            img: Img_3,
            description: "Keep contact with me, many journeys waiting for us 👻",
            text: "Last updated 3 mins ago"
        }
    ]
    return (
        <div style={{ minHeight: "700px", height:"fit-content"}}>
            <div className="container-sm" >
                <br/>
                <Type/>
                <br/><br/>
                <div className="container-md" style={{height:"fit-content"}}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            list.map((item, index) => (
                                <div className="col" key={index}>
                                    <Link to={item.url}>
                                        <div className="card h-100" style={{borderRadius: "25px",padding:"20px", border: "2px solid #183153"}}>
                                            <img src={item.img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title" style={{color:"#183153"}}>{item.title}</h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted" style={{color:"#183153"}}>{item.text}</small>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
