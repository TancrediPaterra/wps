import React from "react";
import {ReactComponent as BulletCube} from "../Assets/SVG/BulletCube.svg";
import {Link} from "react-router-dom";

function Titolo({name, subName, place, date}){
    console.log(name);
    return <div className={"box-titolo-torna-gallery"}>
        <div className={`box-titolo`}>
            <BulletCube style={{height: "32px", width: "32px"}}/>
            <div className={`titolo`}>
                <div>{name?.toUpperCase()}</div>
                <div>{subName?.toUpperCase()}</div>
                <div><b>{place?.toUpperCase()} {place && "•"} {date?.toUpperCase()}</b></div>
            </div>
        </div>
        <Link to={"/lavori"} className={"torna-gallery"}>Torna alla gallery</Link>
    </div>

}

export default Titolo;