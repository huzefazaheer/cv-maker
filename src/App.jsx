import { useState } from 'react';
import './App.css'
import "./components/menu.css"
import CV from './components/cv'
import { EducationInput, ProfileInput, WorkInput } from './components/input';

function App() {

  const [index, setIndex] = useState(0);

  const [userInfo, setUserInfo] = useState({name:"John Doe", email:"mail@example.com", tel:"923101234567", location:"Islamabad, Pakistan"});
  const [userWork, setUserWork] = useState([{companyName:"Umbrella Inc.", title:"Full Stack Web Dev",location: "Islamabad, Pakistan", desc: "Supported senior researchers on accessibility standards for the open  web. Created and usability tested wireframes and prototypes. Produced  interactive documentation for quick onboarding of new researchers.", startDate: "2024-07-02", endDate: "2028-07-02"}]);
  const [userEducation, setUserEducation] = useState([{schoolName:"National University of Sciences and Technology", degree:"Bachelors in Electrical Engineering", edulevel:"Undergraduate", location:"Islamabad, Pakistan", startDate: "2024-07-02", endDate: "2028-07-02"}])

  const info = (
    <>
    <h2 className='inputheading'>Personal Details</h2>
    <ProfileInput userInfo = {userInfo} setUserInfo = {setUserInfo}></ProfileInput>
    </>
  )

  const edu = (
    <>
    <h2 className='inputheading'>Education</h2>
    <EducationInput userEducation={userEducation} setUserEducation={setUserEducation}></EducationInput>
    <button>Add New</button>
    </>
  )

  const work = (
    <>
    <h2 className='inputheading'>Work</h2>
    <WorkInput userWork = {userWork} setUserWork = {setUserWork}></WorkInput>
    <button>Add New</button>
    </>
  )

  return (
      <>
      <div className="menu">
        <div className="controls">
          <div className="control" onClick={() => {setIndex(0)}}><img src="../src/assets/infoicon.svg" alt="" /><p className='tiny'>Personal Info</p></div>
          <div className="control" onClick={() => {setIndex(1)}}><img src="../src/assets/eduicon.svg" alt="" /><p className='tiny'>Education</p></div>
          <div className="control" onClick={() => {setIndex(2)}}><img src="../src/assets/workicon.svg" alt="" /><p className='tiny'>Work</p></div>
          <div className="control" onClick={() => {setIndex(3)}}><img src="../src/assets/settingsicon.svg" alt="" /><p className='tiny'>Prefrences</p></div>
        </div>
        {index == 0 ? info : index == 1 ? edu : work}
      </div>
      <CV userInfo = {userInfo} userWork={userWork} userEducation={userEducation}></CV>
      </>
  );
}

export default App
