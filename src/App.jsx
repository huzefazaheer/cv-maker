import './App.css'

function App() {

  return (
    <>
      <div className="menu">
        <h1>Personal Details</h1>
        <div className="input">
          <label >Full Name</label><input type="text" ></input>
          <label >Email</label><input type="email" ></input>
          <label >Phone Number</label><input type="number" ></input>
          <label >Address</label><input type="text" ></input>
        </div>
      </div>
      <div className="cv">
        <h2>John Doe</h2>
        <h3>email@example.com</h3>
        <h3>+923111889644</h3>
        <h3>Islamabad, PK</h3>
      </div>
    </>
  )
}

export default App
