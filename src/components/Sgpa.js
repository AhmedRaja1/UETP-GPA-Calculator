import React, { useState } from 'react';
import Emoji from './Emoji';

// Importing JSON files of Departmental Data
import Agri from '../Branch/agriculture.json';
import Chem from '../Branch/chemical.json';
import Civil from '../Branch/Civil.json';
import Csit from '../Branch/csit.json';
import Ds from '../Branch/datascience.json';
import Dcse from '../Branch/dcse.json';
import Ecom from '../Branch/Electrical Comm.json';
import Epow from '../Branch/Electrical Power.json';
import Eng from '../Branch/Energy.json';
import Elec from '../Branch/Electronics.json';
import Ind from '../Branch/industrial.json';
import Mech from '../Branch/Mech.json';
import Mte from '../Branch/Mechatronics.json';
import Mini from '../Branch/mining.json';


const Sgpa = () => {
  const [semValue, setSemester] = useState(0);
  const [branch, setBranch] = useState(Dcse);
  const [creditsValues, setSelectedValues] = useState({});
  const [sgpa, setSgpa] = useState(false);
  const [message, setMessage] = useState();
  const [animation, setAnimation] = useState(false);

  function animate() {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false)
    }, 1000);
  }

  const handleChange = (e) => {
    setSemester(e.target.value);
    setSelectedValues({});
    setSgpa(false);
    setMessage(false);
    document.form.reset();
  }
  
// Branch Switching
  const changeBranch = (e) => {
    if (e.target.value === 'Dcse')
      setBranch(Dcse);
    else if (e.target.value === 'Chem')
      setBranch(Chem);
    else if (e.target.value === 'Ind')
      setBranch(Ind);
    else if (e.target.value === 'Eng')
      setBranch(Eng);
    else if (e.target.value === 'Ds')
      setBranch(Ds);
    else if (e.target.value === 'Civil')
      setBranch(Civil);
    else if (e.target.value === 'Mte')
      setBranch(Mte);
    else if (e.target.value === 'Mini')
      setBranch(Mini);
    else if (e.target.value === 'Mech')
      setBranch(Mech);
    else if (e.target.value === 'Csit')
      setBranch(Csit);
    else if (e.target.value === 'Agri')
      setBranch(Agri);
    else if (e.target.value === 'Elec')
      setBranch(Elec);
    else if (e.target.value === 'Epow')
      setBranch(Epow);
    else if (e.target.value === 'Ecom')
      setBranch(Ecom);

      setSgpa(false);
      setMessage(false);
    setSelectedValues({});
    document.form.reset();
  }


  const Calculate = () => {
    animate();
    let credits = 0;
    let totalFields = 0;
    branch[semValue].forEach((c) => {
      credits = credits + (c.theoryCredits + c.practicalCredits);
      if (c.theoryCredits)
        totalFields++;
      if (c.practicalCredits)
        totalFields++;
    });

    

    console.log('Credits', credits); // tells the credits of a semester in console


    var a = Object.keys(creditsValues).map(function (key) {
      return creditsValues[key];
    });
     console.log(creditsValues);
    if (a.length !== totalFields) {
      setMessage('Please fill out the requisites! 😬')
    } else {
      var Sum = 0;
      for (var i in a) {
        Sum += (a[i]); // Similar to UETP Transcript Function
      }
      const sgpa = (Sum / (credits));
      setSgpa(sgpa.toFixed(2));
      setMessage(Messages(sgpa));
    }
  }

  function Messages(sgpa) {
    if (sgpa >= 3.80)
      return `Fantabulastic! You are the gem 💎`;
    else if (sgpa >= 3.60)
      return `Excellent ! Applaudable 👏`;
    else if (sgpa >= 3.40)
      return ` Wah Wah! Decent Score 🍻`;
    else if (sgpa >= 3.20)
      return `Push yourself, just a little 🙌`;
    else if (sgpa >= 3.00)
      return `3een Waalay Kamaal Kartay Hain :) 🎉`;
    else if (sgpa >= 2.80)
      return `Apna Time Aayega 💪`;
      else if (sgpa >= 2.50)
      return `Tumse Na Ho Payega 😂 `;  
      else if (sgpa >= 2.20)
      return `Lagay Raho, You are doing well! 🚩 `;
    else
      return `Need to work harder 🔨 `;
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-around">
        <div>
          <span className="lbl sgpalbl">School :</span>
          <select name="Branch" className="semSelect mx-2" onChange={changeBranch} >
          <option value="none" disabled selected>Department</option>
            <option value="Agri">Agricultural</option>
            <option value="Chem">Chemical</option>
            <option value="Civil">Civil</option>
            <option value="Csit">CSIT</option>
            <option value="Ds">Data Science</option>
            <option value="Dcse">DCSE</option>
            <option value="Ecom">E-Comm</option>
            <option value="Epow">E-Power</option>
            <option value="Elec">Electronics</option>
            <option value="Eng">Energy</option>
            <option value="Ind">Industrial</option>
            <option value="Mech">Mechanical</option>
            <option value="Mte">Mechatronics</option>
            <option value="Mini">Mining</option>  
          </select>
        </div>
        <div>
          <span className="lbl sgpalbl d-sm-inline-block d-none">Semester :</span>
          <select name="semester" className="semSelect mx-2" onChange={handleChange} >
          <option value="none" disabled selected>Semester</option>
            {Array.apply(0, Array(8)).map(function (x, i) {
              return <option key={i} value={i} >Semester {i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <hr />

      {
        ((!branch[semValue]) || (branch[semValue] && branch[semValue].length < 1)) &&
        (
          <div className="d-flex my-5 justify-content-center align-items-center">
            <div>
              <p className="gradeClr">Sorry ! <Emoji  symbol="😥"/> </p>
              <h3 className="text-muted">Data Not Available</h3>
              <p className="text-muted text-center lead">If you want this updated as early as possible, you can then send me the syllabus structure  <strong className="font-weight-bold"><Emoji symbol="📧" label="mail" />ahmedrajay@gmail.com</strong></p>
            </div>
          </div>
        )
      }

      <form id="form" name="form">
        {
          branch[semValue] && branch[parseInt(semValue)].map((curr, index) => (
            <div key={index} className="row  justify-content-center text-left mx-sm-2 mx-1 my-2">
              <div className="col-sm-6 courselbl mb-2 mb-sm-0">
                {curr.courseName}
              </div>
              {
                curr.theoryCredits > 0 && (
                  <div className="col">
                    <select name={curr.courseName + `Th`} defaultValue="none" className="form-control" onChange={(e) => (
                      setSelectedValues({
                        ...creditsValues, [e.target.name]: e.target.value * curr.theoryCredits,
                      }
                      )
                    )}>
                    <option value="none" disabled selected>Theory</option>
                    <option value="4.00">A</option>
                    <option value="3.67">A-</option>
                    <option value="3.33">B+</option>
                    <option value="3.00">B</option>
                    <option value="2.67">B-</option>
                    <option value="2.33">C+</option>
                    <option value="2.00">C</option>
                    <option value="1.67">C-</option>
                    <option value="1.33">D+</option>
                    <option value="1.00">D</option>
                    <option value="0.00">F</option>
                    </select>
                    
                    </div>
                )
              }
              {
                curr.practicalCredits > 0 && (<div className="col">
                  <select name={curr.courseName + `Pr`} defaultValue="none" className="form-control" onChange={(e) => (
                    setSelectedValues({
                      ...creditsValues,
                      [e.target.name]: e.target.value * curr.practicalCredits
                    })
                  )} >
                    <option value="none" disabled selected>Lab</option>
                    <option value="4.00">A</option>
                    <option value="3.67">A-</option>
                    <option value="3.33">B+</option>
                    <option value="3.00">B</option>
                    <option value="2.67">B-</option>
                    <option value="2.33">C+</option>
                    <option value="2.00">C</option>
                    <option value="1.67">C-</option>
                    <option value="1.33">D+</option>
                    <option value="1.00">D</option>
                    <option value="0.00">F</option>
                  </select>
                </div>)
              }
            </div>
          ))
        }
      </form>
      {
        branch[semValue] && branch[semValue].length >= 1 &&
        <button onClick={Calculate} className="CalculateBtn">Calculate</button>
      }
      <div className="row m-0 align-items-center justify-content-center text-center">
        {sgpa && <div className="col-sm-4">
          <h1 className={`gradeClr ${animation ? 'wobble' : ''}  `}  > {
            sgpa
          }<span className="outof">/ 4.00</span>
          </h1>
        </div>}
        {
          message &&
          <div className="col-sm-8 ">
            <h2 className={`text-muted  ${animation ? 'flipInY' : ''}  `}  >
              {
                message
              }
            </h2>
          </div>
        }
      </div>
    </div>
  )
}

export default Sgpa

