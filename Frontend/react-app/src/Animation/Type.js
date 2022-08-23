import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    if (localStorage.getItem("loginStatus") === null) {
        return (
            <div className="container-sm">
                <div className="ForCss" style={{color: "#183153", fontFamily: "'Lato', sans-serif"
                    , fontWeight: "bold", textAlign: "center", fontSize:"30px"}}>
                    <br/>
                    <br/>
                    <Typewriter
                        options={{
                            strings: ['Hi there, your first time coming here ? 🙃'
                                , 'Remember my words, can help u a lot 🤑',
                                'Click on each element of navbar to see aspects of this website 😶',
                                'U can click in pictures below too 😗', 'Many features are available only when u log in 😶',
                                'Enjoy your time here 😎'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 20,
                            pauseFor: 3000
                        }}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="container-sm">
            <div className="ForCss" style={{color: "#183153", fontFamily: " 'Lato', sans-serif"
                , fontWeight: "bold", textAlign: "center", fontSize:"30px"}}>
                <br/><br/>
                <Typewriter
                    options={{
                        strings: ['Nice to meet u again 🤠'
                            , 'Oh i see, u logged in now 😊',
                            'U can now access many hidden feature 😶',
                            'Cant wait for it right ?  😋',
                            'Enjoy your time here 😎'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 20,
                        pauseFor: 3000
                    }}
                />
            </div>
        </div>
    )
}
export default Type;