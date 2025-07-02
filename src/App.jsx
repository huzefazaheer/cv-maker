import { useState } from 'react';
import './App.css'
import CV from './components/cv'
import { ProfileInput } from './components/input';

function App() {

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("mail@example.com");
  const [tel, setTel] = useState("923103333333");
  const [location, setLocation] = useState("Islamabad, PK");

  return (
      <>
      <div className="menu">
        <ProfileInput fullName = {fullName} setFullName = {setFullName} email = {email} setEmail = {setEmail} tel = {tel} setTel = {setTel} location = {location} setLocation = {setLocation}></ProfileInput>
      </div>
      <CV fullName = {fullName} email = {email} tel = {tel} location={location}></CV>
      </>
  );
}

export default App
