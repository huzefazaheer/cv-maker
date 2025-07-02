export default function CV({fullName, email, tel, location}){

    return(
        <>
            <div className="cv">
            <h2>{fullName}</h2>
            <h3>{email}</h3>
            <h3>{tel}</h3>
            <h3>{location}</h3>
            </div>
        </>
    );
}