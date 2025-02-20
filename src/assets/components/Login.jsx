import React from 'react'

const Login = () => {
    return (
        <>
        <div className="d-flex">
            <div className="card">
                <h2>Login Form</h2>

                <div className="login_register">
                    <a href="#" className="login" target="blank">Login</a>
                    {/* <a href="https://codepen.io/pen?template=VwRgKYB" className="register" target="blank">Signup</a> */}
                </div>

                <form className="form">
                    <input type="email" placeholder="Email Adress" className="email"></input>
                    <input type="password" placeholder="password" className="pass"></input>
                </form>

                <a href="#" className="fp">Forgot password?</a>
                <button type="button" className="login_btn">Login</button>
                <div className="footer_card">
                    <p>Not a member?</p>
                    <a href="#">Singup now</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login