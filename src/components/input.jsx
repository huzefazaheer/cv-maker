
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

export function WorkInput({userWork, setUserWork, id}){

    let currWork, workindex

    for(let i =0; i<userWork.length; i++){
        if(userWork[i].id == id){
            currWork = userWork[i]
            workindex = i
            break
        }
    }

    return (
        <>
        <div className="input"><label >Company Name</label><input type="text" value={currWork.companyName} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], companyName: e.target.value}, ...userWork.slice(workindex + 1)])}></input></div>
        <div className="input"><label >Position Title</label><input type="email" value={currWork.title} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], title: e.target.value}, ...userWork.slice(workindex + 1)])}></input></div>
        <div className="input"><label >Start Date</label><input type="date" value={currWork.startDate} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], startDate: e.target.value}, ...userWork.slice(workindex + 1)])}></input></div>
        <div className="input"><label >End Date</label><input type="date" value={currWork.endDate} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], endDate: e.target.value}, ...userWork.slice(workindex + 1)])}></input></div>
        <div className="input"><label >Location</label><input type="text" value={currWork.location} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], location: e.target.value}, ...userWork.slice(workindex + 1)])}></input></div>
        <div className="input"><label >Description</label><textarea type="text" value={currWork.desc} onChange={(e) => setUserWork([...userWork.slice(0, workindex), {...userWork[workindex], desc: e.target.value}, ...userWork.slice(workindex + 1)])}></textarea></div>
        </>
    );
}

export function EducationInput({userEducation, setUserEducation, id}){

    let currEdu, eduindex

    for(let i =0; i<userEducation.length; i++){
        if(userEducation[i].id == id){
            currEdu = userEducation[i]
            eduindex = i
            break
        }
    }

    return (
        <>
        <div className="input"><label >School</label><input type="text" value={currEdu.schoolName} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], schoolName: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        <div className="input"><label >Degree</label><input type="text" value={currEdu.degree} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], degree: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        <div className="input"><label >Start Date</label><input type="date" value={currEdu.startDate} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], startDate: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        <div className="input"><label >End Date</label><input type="date" value={currEdu.endDate} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], endDate: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        <div className="input"><label >Location</label><input type="text" value={currEdu.location} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], location: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        <div className="input"><label >Level</label><input type="text" value={currEdu.edulevel} onChange={(e) => setUserEducation([...userEducation.slice(0, eduindex), {...userEducation[eduindex], edulevel: e.target.value}, ...userEducation.slice(eduindex + 1)])}></input></div>
        </>
    );
}