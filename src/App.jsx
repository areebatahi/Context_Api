import { Routes, Route, Link, Navigate } from "react-router";
import { useState } from 'react';
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";
import Menu from "./assets/components/Menu";
import Login from "./assets/components/Login";
import Signup from "./assets/components/Signup"
import './App.css'

function App() {

  const [isLogin, setIsLink] = useState(true)

  return (
    <>
      {(isLogin) ?
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">Gourmet au Catering</a>
            <ul className="navbar-nav">
              <li className="nav-item p-2">
                <Link to={"/"} className="nav-link active"> Home </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/menu"} className="nav-link active"> Menu </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/contact"} className="nav-link active"> Contact </Link>
              </li>
              <li className="nav-item p-2">
                <button type="button" className="btn btn-danger" onClick={() => { setIsLink(!isLogin) }} >Toogle Button</button>
              </li>
            </ul>
          </div>
        </nav> : <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav">
              <li className="nav-item p-2">
                <Link to={"/"} className="nav-link active"> Login </Link>
              </li>
              <li className="nav-item p-2">
                <Link to={"/signup"} className="nav-link active"> Signup </Link>
              </li>
              <li className="nav-item p-2">
                <button type="button" className="btn btn-danger" onClick={() => { setIsLink(!isLogin) }} >Toogle Button</button>
              </li>
            </ul>
          </div>
        </nav>
      }
      {(isLogin) ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Routes> :
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }
    </>
  )
}

export default App