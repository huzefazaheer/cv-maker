
export function ProfileInput({fullName, setFullName, email, setEmail, tel, setTel, location, setLocation}){
    return (
        <>
        <div className="input"><label >Full Name</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}></input></div>
        <div className="input"><label >Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input></div>
        <div className="input"><label >Phone Number</label><input type="number" value={tel} onChange={(e) => setTel(e.target.value)}></input></div>
        <div className="input"><label >Address</label><input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input></div>
        </>
    );
}

export function WorkInput(){

    return (
        <>
        <div className="input"><label >Company Name</label><input type="text" ></input></div>
        <div className="input"><label >Position Title</label><input type="email" ></input></div>
        <div className="input"><label >Start Date</label><input type="date" ></input></div>
        <div className="input"><label >End Date</label><input type="date" ></input></div>
        <div className="input"><label >Location</label><input type="text" ></input></div>
        <div className="input"><label >Description</label><input type="text" ></input></div>
        </>
    );
}

export function EducationInput(){

    return (
        <>
        <div className="input"><label >School</label><input type="text" ></input></div>
        <div className="input"><label >Degree</label><input type="text" ></input></div>
        <div className="input"><label >Start Date</label><input type="date" ></input></div>
        <div className="input"><label >End Date</label><input type="date" ></input></div>
        <div className="input"><label >Location</label><input type="text" ></input></div>
        <div className="input"><label >Level</label><input type="text" ></input></div>
        </>
    );
}