import {Link} from "react-router-dom";
import React from "react";
import {ReactComponent as BulletCube} from "../Assets/SVG/BulletCube.svg";


function AreaInterventoHome({id, name, setFloor, isBoxVisible, text}){

    return <div className={`area-intervento ${!isBoxVisible ? "opacity-titolo-area" : ""}`}>
        <button className={`button-titolo-area-intervento`} onClick={()=>{setFloor(id)}}>
            <BulletCube style={{height: "32px", width: "32px"}}/>
            <div className={`titolo`}>{name}</div>
        </button>
        {isBoxVisible && <div className={"box-testo-comparsa"}>
            {text}
            {id>1 && <Link className={"gallery-button"} to={`/lavori/${name.replace(/\s+/g, '-')}`}>Vai alla galleria</Link>}
        </div>}
    </div>
}

export default AreaInterventoHome;
