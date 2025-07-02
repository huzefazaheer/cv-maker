import { useState } from 'react';
import './App.css'
import CV from './components/cv'
import { EducationInput, ProfileInput, WorkInput } from './components/input';

function App() {

  const [userInfo, setUserInfo] = useState({name:"John Doe", email:"mail@example.com", tel:"923101234567", location:"Islamabad. PK"});

  const [userWork, setUserWork] = useState([{name:"hello", title:"world"}]);

  return (
      <>
      <div className="menu">
        <ProfileInput userInfo = {userInfo} setUserInfo = {setUserInfo}></ProfileInput>
        <WorkInput userWork = {userWork} setUserWork = {setUserWork}></WorkInput>
        <EducationInput></EducationInput>
      </div>
      <CV userInfo = {userInfo} userWork={userWork}></CV>
      </>
  );
}

export default App
