import "./cv.css"

export default function CV({userInfo, userWork, userEducation}){

    return(
        <>
            <div className="cv">
            <div className="cvinfo"><CVInfo userInfo={userInfo}></CVInfo></div>
            <div className="cvedu">
                <h2 className="cvheading">Education</h2>
                <CVEdu userEducation={userEducation}></CVEdu>
            </div>
            <div className="cvwork">
                <h2 className="cvheading">Professional Experience</h2>
                <CVWork userWork={userWork}></CVWork>
            </div>
            </div>
        </>
    );
}

function CVInfo({userInfo}){

    return(
        <>
            <h2 className="username">{userInfo.name}</h2>
            <div className="iconholder"><img src="../../src/assets/mailicon.svg" alt="" /><h3 className="useremail">{userInfo.email}</h3></div>
            <div className="iconholder"><img src="../../src/assets/telicon.svg" alt="" /><h3 className="usertel">{userInfo.tel}</h3></div>
            <div className="iconholder"><img src="../../src/assets/locicon.svg" alt="" /><h3 className="userlocation">{userInfo.location}</h3></div>
            </>
    )
}

function CVWork({userWork}){
    let workDetail = []
        workDetail.push(
            <div className="cvworkdetail">
                
            <div className="left">
                <div className="date"><p>{userWork[0].startDate}</p>
            <p>{userWork[0].endDate}</p></div>
            <p>{userWork[0].location}</p>
            </div>
            <div className="right">
            <p className="bold">{userWork[0].companyName}</p>
            <p>{userWork[0].title}</p>
            <p className="small">{userWork[0].desc}</p></div>
            </div>
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
            <div className="cvedudetail">
            
            <div className="left">
            <div className="date"><p>{userEducation[0].startDate}</p>
            <p>{userEducation[0].endDate}</p></div>
            <p>{userEducation[0].location}</p>
            </div>

            <div className="right">
            <p className="bold">{userEducation[0].schoolName}</p>
            <p>{userEducation[0].degree}</p>
            <p className="small">{userEducation[0].edulevel}</p></div>
            </div>
        )

    return(
        <>
        {workDetail}
        </>
    )
}