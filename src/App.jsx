import { useState } from 'react';
import './App.css'
import CV from './components/cv'
import { EducationInput, ProfileInput, WorkInput } from './components/input';

function App() {

  const [userInfo, setUserInfo] = useState({name:"John Doe", email:"mail@example.com", tel:"923101234567", location:"Islamabad. PK"});
  const [userWork, setUserWork] = useState([{companyName:"hello", title:"world",location: "ISB, PK", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit animi soluta asperiores ratione maxime vero repellat ducimus perspiciatis recusandae?", startDate: "2024-07-02", endDate: "2028-07-02"}]);
  const [userEducation, setUserEducation] = useState([{schoolName:"Nust", degree:"Electrical Engineering", edulevel:"undergrad", location:"Islamabad", startDate: "2024-07-02", endDate: "2028-07-02"}])

  return (
      <>
      <div className="menu">
        <ProfileInput userInfo = {userInfo} setUserInfo = {setUserInfo}></ProfileInput>
        <WorkInput userWork = {userWork} setUserWork = {setUserWork}></WorkInput>
        <EducationInput userEducation={userEducation} setUserEducation={setUserEducation}></EducationInput>
      </div>
      <CV userInfo = {userInfo} userWork={userWork} userEducation={userEducation}></CV>
      </>
  );
}

export default App
