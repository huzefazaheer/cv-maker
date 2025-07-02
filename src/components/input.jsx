
export function ProfileInput({userInfo, setUserInfo}){
    return (
        <>
        <div className="input"><label >Full Name</label><input type="text" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}></input></div>
        <div className="input"><label >Email</label><input type="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}></input></div>
        <div className="input"><label >Phone Number</label><input type="text" value={userInfo.tel} onChange={(e) => setUserInfo({...userInfo, tel: e.target.value})}></input></div>
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

export function EducationInput({userEducation, setUserEducation}){

    const currEdu = userEducation[0]

    return (
        <>
        <div className="input"><label >School</label><input type="text" value={currEdu.schoolName} onChange={(e) => setUserEducation([{...currEdu, schoolName: e.target.value}, ...userEducation.splice(1)])}></input></div>
        <div className="input"><label >Degree</label><input type="text" value={currEdu.degree} onChange={(e) => setUserEducation([{...currEdu, degree: e.target.value}, ...userEducation.splice(1)])}></input></div>
        <div className="input"><label >Start Date</label><input type="date" value={currEdu.startDate} onChange={(e) => setUserEducation([{...currEdu, startDate: e.target.value}, ...userEducation.splice(1)])}></input></div>
        <div className="input"><label >End Date</label><input type="date" value={currEdu.endDate} onChange={(e) => setUserEducation([{...currEdu, endDate: e.target.value}, ...userEducation.splice(1)])}></input></div>
        <div className="input"><label >Location</label><input type="text" value={currEdu.location} onChange={(e) => setUserEducation([{...currEdu, location: e.target.value}, ...userEducation.splice(1)])}></input></div>
        <div className="input"><label >Level</label><input type="text" value={currEdu.edulevel} onChange={(e) => setUserEducation([{...currEdu, edulevel: e.target.value}, ...userEducation.splice(1)])}></input></div>
        </>
    );
}