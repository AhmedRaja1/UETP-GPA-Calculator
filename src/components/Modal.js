import React, { useState } from "react";
import Emoji from "./Emoji";
import logo from "../img/icon.png";
import info from "../img/Info.svg";

const Modal = () => {
  const [show, showModal] = useState(false);
  return (
    <div className='clearfix m-0'>
      <button className='openModalBtn' onClick={() => showModal(true)}>
        <img src={info} style={{ width: "30px", height: "30px" }} alt='i'></img>
      </button>
      <div style={{ display: show ? "block" : "none" }} className='modal'>
        <div className='modal-content bounceIn clearfix'>
          <span onClick={() => showModal(false)} className='close'>
            &times;
          </span>

          <div className=' d-flex flex-column justify-content-center align-items-center text-center'>
            <img
              src={logo}
              style={{ width: "50px", height: "50px" }}
              className='img-fluid'
              alt='Icon'
            />
            <h2 className='primary mt-1'>UET Peshawar GPA Calculator</h2>
            <h4 className='lead'><a href="https://ahmedrajaspeaks.com">Made with <Emoji label="heart" symbol="❤️"/> by Raja Ahmed</a></h4>
          </div>

          <p className='text-center text-muted text'>
            <span className='primary-text'></span> Hey, Folks! If you come across something fishy regarding credits, subjects or anything else, just shoot me an
            <span className='font-weight-bold'>
              <Emoji symbol='📧' label='mail' />  <br/> ahmedrajay@gmail.com
            </span>
          </p>
          <div>
            Curriculum and Syllabi Structure is as per defined in the <br/>
            <a
              href='https://www.uetpeshawar.edu.pk/prospectus/UG%20Prospectus%202021-22%20(Final).pdf'
              
            >
              {"UET Peshawar's Prospectus (2021-22)"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
