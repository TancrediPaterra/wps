import React from "react";
function Titolo({name, subName, place, date}){
    console.log(name);
    return <div className={`box-titolo`}>
        <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"} style={{height:"32px", width:"32px"}}/>
        <div className={`titolo`}>
            <div>{name?.toUpperCase()}</div>
            <div>{subName?.toUpperCase()}</div>
            <div><b>{place?.toUpperCase()} {place && "•"} {date?.toUpperCase()}</b></div>
        </div>
    </div>
}

export default Titolo;