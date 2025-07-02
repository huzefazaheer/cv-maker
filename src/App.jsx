import { useState } from 'react';
import './App.css'
import "./components/menu.css"
import CV from './components/cv'
import { EducationInput, ProfileInput, WorkInput } from './components/input';

function App() {

  const [userInfo, setUserInfo] = useState({name:"John Doe", email:"mail@example.com", tel:"923101234567", location:"Islamabad, Pakistan"});
  const [userWork, setUserWork] = useState([{companyName:"Umbrella Inc.", title:"Full Stack Web Dev",location: "Islamabad, Pakistan", desc: "Supported senior researchers on accessibility standards for the open  web. Created and usability tested wireframes and prototypes. Produced  interactive documentation for quick onboarding of new researchers.", startDate: "2024-07-02", endDate: "2028-07-02"}]);
  const [userEducation, setUserEducation] = useState([{schoolName:"National University of Sciences and Technology", degree:"Bachelors in Electrical Engineering", edulevel:"Undergraduate", location:"Islamabad, Pakistan", startDate: "2024-07-02", endDate: "2028-07-02"}])

  return (
      <>
      <div className="menu">
        <h2 className='inputheading'>Personal Details</h2>
        <ProfileInput userInfo = {userInfo} setUserInfo = {setUserInfo}></ProfileInput>
        <h2 className='inputheading'>Education</h2>
        <EducationInput userEducation={userEducation} setUserEducation={setUserEducation}></EducationInput>
        <h2 className='inputheading'>Work</h2>
        <WorkInput userWork = {userWork} setUserWork = {setUserWork}></WorkInput>
      </div>
      <CV userInfo = {userInfo} userWork={userWork} userEducation={userEducation}></CV>
      </>
  );
}

export default App
