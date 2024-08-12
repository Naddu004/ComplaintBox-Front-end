import React, { useRef, useEffect } from "react";
import "../admin2.css";

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
        <div className="login-body">
            <div className="login-container" id="login-container" ref={containerRef}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>SUPER ADMIN  </h1>
                        <div className="social-container">
                            {/* <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-github"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>

                        {/* <input type="text" placeholder="Name" /> */}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>LOGIN</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>ADMIN</h1>
                        <div className="social-container">
                            {/* <a href="#" className="social"><i className="fab fa-google"></i></a>
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-github"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>

                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>LOGIN</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>ADMIN</h1>

                            <button className="ghost" id="signIn">LOGIN</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>SUPER ADMIN </h1>

                            <button className="ghost" id="signUp">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
