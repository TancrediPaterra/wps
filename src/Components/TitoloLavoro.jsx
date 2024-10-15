import React from "react";
import {ReactComponent as BulletCube} from "../Assets/SVG/BulletCube.svg";
import {Link} from "react-router-dom";

function TitoloLavoro({name, subName, place, date}){
    return <div className={"container-titolo-lavoro"}>
        <div className={`container-text-titolo-lavoro`}>
            <BulletCube style={{height: "32px", width: "32px"}}/>
            <div className={`text-titolo-lavoro`}>
                <div>{name?.toUpperCase()}</div>
                <div>{subName?.toUpperCase()}</div>
                <div><b>{place?.toUpperCase()} {place && "•"} {date?.toUpperCase()}</b></div>
            </div>
        </div>
        <Link to={"/lavori"} className={"button-torna-gallery"}>Torna alla gallery</Link>
    </div>

}

export default TitoloLavoro;