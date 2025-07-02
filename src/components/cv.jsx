export default function CV({userInfo, userWork}){

    return(
        <>
            <div className="cv">
            <CVInfo userInfo={userInfo}></CVInfo>
            <CVWork userWork={userWork}></CVWork>
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
    for(let i = 0; i<userWork.length; i++){
        workDetail.push(
            <>
            <h2>{userWork[i].name}</h2>
            <h3>{userWork[i].title}</h3>
            </>
        )
    }

    return(
        <>
        {workDetail}
        </>
    )
}