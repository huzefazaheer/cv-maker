export default function Menu(){

    return(
        <>
            <div className="menu">
            <h1>Personal Details</h1>
            <div className="input"><label >Full Name</label><input type="text" ></input></div>
            <div className="input"><label >Email</label><input type="email" ></input></div>
            <div className="input"><label >Phone Number</label><input type="number" ></input></div>
            <div className="input"><label >Address</label><input type="text" ></input></div>
            </div>
        </>
    );
}