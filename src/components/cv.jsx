import "./cv.css"

export default function CV({accentColor, defaultFont, userInfo, userWork, userEducation}){

    return(
        <>
            <div className="cv" style={{fontFamily:defaultFont}}>
            <div className="cvinfo" style={{backgroundColor:accentColor}}><CVInfo userInfo={userInfo}></CVInfo></div>
            <div className="cvedu">
                <h2 className="cvheading" style={{color:accentColor}}>Education</h2>
                <CVEdu userEducation={userEducation}></CVEdu>
            </div>
            <div className="cvwork">
                <h2 className="cvheading" style={{color:accentColor}}>Professional Experience</h2>
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
     let workDetail = userWork.map(work => 
            <div className="cvworkdetail" key={work.id}>
                
            <div className="left">
                <div className="date"><p>{work.startDate}</p>
            <p>{work.endDate}</p></div>
            <p className="medium">{work.location}</p>
            </div>
            <div className="right">
            <p className="bold">{work.companyName}</p>
            <p>{work    .title}</p>
            <p className="small">{work.desc}</p></div>
            </div>
        );

    return(
        <>
        {workDetail}
        </>
    )
}

function CVEdu({userEducation}){
    let eduDetail = userEducation.map(education => 
        <div className="cvedudetail" key={education.id}>
            
            <div className="left">
            <div className="date"><p>{education.startDate}</p>
            <p>{education.endDate}</p></div>
            <p className="bold">{education.location}</p>
            </div>  
            <div className="right">
            <p className="bold">{education.schoolName}</p>
            <p>{education.degree}</p>
            <p className="small">{education.edulevel}</p></div>
            </div>
    );
            
    return(
        <>
        {eduDetail}
        </>
    )
}