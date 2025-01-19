import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";

const Contact = () => {
    let { state, dispatch } = useContext(GlobalContext);
  return (
    <>
      <div className="row">
        <div className="col col-lg-10 col-md-10 col-sm-10">
          <h1>{state.contact.heading}</h1><br /><br /><br />
          <p>{state.contact.para1}</p>
          <p className="bold custom">{state.contact.para2}</p>
          <p>{state.contact.para3}</p>
        </div>
      </div>
    </>
  )
}

export default Contact