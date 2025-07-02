import { useState } from 'react';
import './App.css'
import "./components/menu.css"
import CV from './components/cv'
import { EducationInput, ProfileInput, WorkInput } from './components/input';

function App() {

  const [index, setIndex] = useState(0);

  const [accentColor, setAccentColor] = useState("#365F75")
  const [defaultFont, setDefaultFont] = useState("Arial")

  const [userInfo, setUserInfo] = useState({name:"John Doe", email:"mail@example.com", tel:"923101234567", location:"Islamabad, Pakistan"});
  const [userWork, setUserWork] = useState([{id:crypto.randomUUID(), companyName:"Umbrella Inc.", title:"Full Stack Web Dev",location: "Islamabad, Pakistan", desc: "Supported senior researchers on accessibility standards for the open  web. Created and usability tested wireframes and prototypes. Produced  interactive documentation for quick onboarding of new researchers.", startDate: "2024-07-02", endDate: "2028-07-02"}]);
  const [userEducation, setUserEducation] = useState([{id:crypto.randomUUID(), schoolName:"National University of Sciences and Technology", degree:"Bachelors in Electrical Engineering", edulevel:"Undergraduate", location:"Islamabad, Pakistan", startDate: "2024-07-02", endDate: "2028-07-02"}])

  const info = (
    <>
    <h2 className='inputheading'>Personal Details</h2>
    <ProfileInput userInfo = {userInfo} setUserInfo = {setUserInfo}></ProfileInput>
    </>
  )

  const educations = userEducation.map(education =>
    <EducationInput userEducation={userEducation} setUserEducation={setUserEducation} id={education.id}></EducationInput>
  )
  const edu = (
    <>
    <h2 className='inputheading'>Education Details</h2>
    {educations}
    <button onClick={() => {
      const newid = crypto.randomUUID()
      const newdat = {id:newid, schoolName:"National University of Sciences and Technology", degree:"Bachelors in Electrical Engineering", edulevel:"Undergraduate", location:"Islamabad, Pakistan", startDate: "2024-07-02", endDate: "2028-07-02"}
      setUserEducation([...userEducation, newdat])}}>Add New</button>
    </>
  )

  const works = userWork.map(work =>
    <WorkInput userWork = {userWork} setUserWork = {setUserWork} id={work.id}></WorkInput>
  )
  const work = (
    <>
    <h2 className='inputheading'>Work Details</h2>
    {works}
    <button onClick={() => {
      const newid = crypto.randomUUID()
      const newdat = {id:newid, companyName:"Umbrella Inc.", title:"Full Stack Web Dev",location: "Islamabad, Pakistan", desc: "Supported senior researchers on accessibility standards for the open  web. Created and usability tested wireframes and prototypes. Produced  interactive documentation for quick onboarding of new researchers.", startDate: "2024-07-02", endDate: "2028-07-02"}
      setUserWork([...userWork  , newdat])}}>Add New</button>
    </>
  )

  const pref = (
    <>
    <h2 className='inputheading'>Prefrences</h2>
    <h3 className='inputsubheading'>Choose Accent Colour</h3>
    <div className="col">
    <div href="" id="cyan" className="coloursel" onClick={() => setAccentColor("#365F75")}></div>
    <div href="" id="red" className="coloursel" onClick={() => setAccentColor("#813030")}></div>
    <div href="" id="black" className="coloursel" onClick={() => setAccentColor("#1B1B1B")}></div>
    <div href="" id="green" className="coloursel" onClick={() => setAccentColor("#067403")}></div>
    <div href="" id="pink" className="coloursel" onClick={() => setAccentColor("#943f8a")}></div></div>
    <h3 className='inputsubheading'>Choose Font</h3>
    <div className="col">
    <div href="" id="" className="fontsel" onClick={() => setDefaultFont("Times New Roman")}>Times New Roman</div>
    <div href="" id="" className="fontsel" onClick={() => setDefaultFont("Inter")}>Inter</div>
    <div href="" id="" className="fontsel" onClick={() => setDefaultFont("Arial")}>Arial</div></div>
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
        {index == 0 ? info : index == 1 ? edu : index == 2 ? work : pref}
      </div>
      <CV accentColor = {accentColor} defaultFont = {defaultFont} userInfo = {userInfo} userWork={userWork} userEducation={userEducation}></CV>
      </>
  );
}

export default App
