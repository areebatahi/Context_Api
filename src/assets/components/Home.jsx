import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";

const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <h1 className='m-3'>all user data</h1>

      <div className="border p-3 col-3 m-4">
        <div className="card-body">
          <h5 className="card-title">User Name: <span className='gray'>ngray123</span> </h5>
          <h5 className="card-title">Email Adress: <span className='gray'>gray@gmail.com</span></h5>
          <h5 className="card-title">User ID: <span className='gray'>fhkjgGFJg90967</span></h5>
        </div>
      </div>
      <div className="border p-3 col-3 m-4">
        <div className="card-body">
          <h5 className="card-title">User Name: <span className='gray'>ngray123</span> </h5>
          <h5 className="card-title">Email Adress: <span className='gray'>gray@gmail.com</span></h5>
          <h5 className="card-title">User ID: <span className='gray'>fhkjgGFJg90967</span></h5>
        </div>
      </div>
      <div className="border p-3 col-3 m-4">
        <div className="card-body">
          <h5 className="card-title">User Name: <span className='gray'>ngray123</span> </h5>
          <h5 className="card-title">Email Adress: <span className='gray'>gray@gmail.com</span></h5>
          <h5 className="card-title">User ID: <span className='gray'>fhkjgGFJg90967</span></h5>
        </div>
      </div>
      <div className="border p-3 col-3 m-4">
        <div className="card-body">
          <h5 className="card-title">User Name: <span className='gray'>ngray123</span> </h5>
          <h5 className="card-title">Email Adress: <span className='gray'>gray@gmail.com</span></h5>
          <h5 className="card-title">User ID: <span className='gray'>fhkjgGFJg90967</span></h5>
        </div>
      </div>
    </>
  )
}

export default Home