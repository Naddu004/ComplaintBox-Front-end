import React, { useRef, useEffect } from "react";


const LoginSignUp = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const signUpButton = container.querySelector('#signUp');
        const signInButton = container.querySelector('#signIn');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

        // Cleanup event listeners on component unmount
        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.removeEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []);

    return (
        <div className="login-body1">
            <div className="login-container1" id="login-container" ref={containerRef}>
                <div className="form-container1 sign-up-container1">
                    <form action="#" className="frmadm">
                        <h1>SUPER ADMIN  </h1>
                        <div className="social-container1">
                            {/* <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-github"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>

                        {/* <input type="text" placeholder="Name" /> */}
                        <input type="email" placeholder="Email" className="inpadm" />
                        <input type="password" placeholder="Password" className="inpadm" />
                        <a href="#">Forgot your password?</a>
                        <button className="ghost1">LOGIN</button>
                    </form>
                </div>
                <div className="form-container1 sign-in-container1">
                    <form action="#" className="frmadm">
                        <h1>ADMIN</h1>
                        <div className="social-container1">
                            {/* <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-github"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>

                        <input type="email" placeholder="Email" className="inpadm" />
                        <input type="password" placeholder="Password" className="inpadm" />
                        <a href="#">Forgot your password?</a>
                        <button className="ghost1">LOGIN</button>
                    </form>
                </div>
                <div className="overlay-container1">
                    <div className="overlay1">
                        <div className="overlay-panel1 overlay-left">
                            <h1>ADMIN</h1>

                            <button className="ghost1" id="signIn">LOGIN</button>
                        </div>
                        <div className="overlay-panel1 overlay-right">
                            <h1>SUPER ADMIN </h1>

                            <button className="ghost1" id="signUp">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
