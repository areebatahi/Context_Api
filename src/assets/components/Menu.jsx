import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";

const Menu = () => {
  let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col col-lg-6 col-md-8 col-sm-10 col-text">
          <h1>{state.menu.heading}</h1>
          <h5>{state.menu.menu1}</h5>
          <p>{state.menu.para1}</p>
          <br></br>
          <h5>{state.menu.menu2}</h5>
          <p>{state.menu.para2}</p>
          <br></br>
          <h5>{state.menu.menu3}</h5>
          <p>{state.menu.para3}</p>
          <br></br>
          <h5>{state.menu.menu4}</h5>
          <p>{state.menu.para4}</p>
          <br></br>
          <h5>{state.menu.menu5}</h5>
          <p>{state.menu.para5}</p>

        </div>
        <div className="col col-lg-6 col-md-8 col-sm-10 col-image">
          <img src={state.menu.img} alt="" className="image-fluid"></img>
        </div>
      </div>
    </>
  )
}

export default Menu