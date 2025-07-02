export default function CV({userInfo, userWork, userEducation}){

    return(
        <>
            <div className="cv">
            <CVInfo userInfo={userInfo}></CVInfo>
            <CVWork userWork={userWork}></CVWork>
            <CVEdu userEducation={userEducation}></CVEdu>
            </div>
        </>
    );
}

function CVInfo({userInfo}){

    return(
        <>
        <h2>{userInfo.name}</h2>
            <h3>{userInfo.email}</h3>
            <h3>{userInfo.tel}</h3>
            <h3>{userInfo.location}</h3>
            </>
    )
}

function CVWork({userWork}){
    let workDetail = []
        workDetail.push(
            <>
            <h2>{userWork[0].companyName}</h2>
            <h3>{userWork[0].title}</h3>
            <h3>{userWork[0].location}</h3>
            <h4>{userWork[0].startDate}</h4>
            <h4>{userWork[0].endDate}</h4>
            <p>{userWork[0].desc}</p>
            </>
        )

    return(
        <>
        {workDetail}
        </>
    )
}

function CVEdu({userEducation}){
    let workDetail = []
        workDetail.push(
            <>
            <h2>{userEducation[0].schoolName}</h2>
            <h3>{userEducation[0].degree}</h3>
            <h3>{userEducation[0].edulevel}</h3>
            <h4>{userEducation[0].startDate}</h4>
            <h4>{userEducation[0].endDate}</h4>
            <h3>{userEducation[0].location}</h3>
            </>
        )

    return(
        <>
        {workDetail}
        </>
    )
}