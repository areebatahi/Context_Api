import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";

const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={state.home.img1} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="container-fluid carousel-text">{state.home.webName}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-sm-10 col-image">
          <img src={state.home.img2} alt="" className="image-fluid"></img>
        </div>
        <div className="col col-lg-5 col-md-6 col-sm-10">
          <div className="card">
            <h1>{state.home.catering}</h1>
            <br></br>
            <h6>{state.home.since}</h6>
            <p>{state.home.para1}</p>
            <p className="gray">{state.home.para2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home