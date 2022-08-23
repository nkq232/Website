import React from "react";
import '../css/footer.css'
const Footer = () => {
    if (localStorage.getItem('loginStatus') === "1") {
        return null;
    }
    const list = [
        {
            itemName: "fab fa-facebook fa-2xm",
            href: "https://www.facebook.com/nguyenkhanh.quan.96/"
        },
        {
            itemName: "fa-brands fa-linkedin fa-2xm",
            href: "https://www.linkedin.com/in/nguy%E1%BB%85n-kh%C3%A1nh-qu%C3%A2n-a3710a23a/"
        },
        {
            itemName: "fab fa-github fa-2xm",
            href: "https://github.com/nkq232"
        }
    ]
    return (

        <div className="footer">
            <br/>
            <div className="list-icon">
                {
                    list.map((item, index) => (
                        <div className="icon" key={index}>
                            <a href={item.href} target={"_blank"} rel="noreferrer" >
                                <i className={item.itemName} ></i>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className="text" style={{color:"white", fontSize:"15px"}}>Copyright Quan Nguyen 2022</div>
        </div>
    );
}
export default Footer;