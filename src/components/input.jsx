
export function ProfileInput({userInfo, setUserInfo}){
    return (
        <>
        <div className="input"><label >Full Name</label><input type="text" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}></input></div>
        <div className="input"><label >Email</label><input type="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}></input></div>
        <div className="input"><label >Phone Number</label><input type="number" value={userInfo.tel} onChange={(e) => setUserInfo({...userInfo, tel: e.target.value})}></input></div>
        <div className="input"><label >Address</label><input type="text" value={userInfo.location} onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}   ></input></div>
        </>
    );
}

export function WorkInput({userWork, setUserWork}){

    const currWork = userWork[0]

    return (
        <>
        <div className="input"><label >Company Name</label><input type="text" value={currWork.companyName} onChange={(e) => setUserWork([{...currWork, companyName: e.target.value}, ...userWork.splice(1)])}></input></div>
        <div className="input"><label >Position Title</label><input type="email" value={currWork.title} onChange={(e) => setUserWork([{...currWork, title: e.target.value}, ...userWork.splice(1)])}></input></div>
        <div className="input"><label >Start Date</label><input type="date" value={currWork.startDate} onChange={(e) => setUserWork([{...currWork, startDate: e.target.value}, ...userWork.splice(1)])}></input></div>
        <div className="input"><label >End Date</label><input type="date" value={currWork.endDate} onChange={(e) => setUserWork([{...currWork, endDate: e.target.value}, ...userWork.splice(1)])}></input></div>
        <div className="input"><label >Location</label><input type="text" value={currWork.location} onChange={(e) => setUserWork([{...currWork, location: e.target.value}, ...userWork.splice(1)])}></input></div>
        <div className="input"><label >Description</label><input type="text" value={currWork.desc} onChange={(e) => setUserWork([{...currWork, desc: e.target.value}, ...userWork.splice(1)])}></input></div>
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