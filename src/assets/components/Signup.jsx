import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="card ">
        <h2>Signup Form</h2>
        <div className="login_register">
          {/* <a href="3" className="login" target="blank">Login</a> */}
          <a href="#" className="register" target="blank">Signup</a>
        </div>
        <form className="form">
          <input type="name" placeholder="User Name" className="email"></input>
          <input type="email" placeholder="Email Adress" className="email"></input>
          <input type="password" placeholder="password" className="pass"></input>
          <input type="password" placeholder="Confirm Password" className="confirm_pass"></input>
        </form>
        <a href="#" className="fp">Forgot password?</a>
        <button type="submit" className="login_btn">Singup</button>
      </div>

    </>
  )
}

export default Signup