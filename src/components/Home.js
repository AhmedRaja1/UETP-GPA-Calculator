import React, { useState } from 'react';
import Sgpa from './Sgpa';


const Home = () => {
  const [sgpaBtn, setBtn] = useState(true);
  return (
    <div className=" container d-flex justify-content-center align-items-center text-center flex-column mb-sm-5 clearfix">
      <div className="text-light">
      <h3 className="heading">UET Peshawar</h3>
      <h1 className="heading">GPA Calculator</h1>
      
        <br/>
        
      </div>
      <div className="box p-3 mt-sm-2 container bg-white ">
        <div className="row">
          <div className="col">
            <button onClick={() => setBtn(true)} className={`sgpaBtn  ${sgpaBtn ? 'activeBtn' : ''}  `}>Wondering what's your GPA❓ 
            </button> 
          </div>
          
          
        </div>
        <hr />
        {sgpaBtn &&
          <Sgpa />}
        {!sgpaBtn &&
          ''}
      </div>
    </div>
  )
}

export default Home
