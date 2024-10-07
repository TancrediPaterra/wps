import {Link} from "react-router-dom";
import React from "react";
import {ReactComponent as BulletCube} from "../Assets/SVG/BulletCube.svg";


function AreaInterventoHome({id, name, setFloor, floor, text}){

    return <div className={`area-intervento ${(floor!==0 && floor!==id)? "opacity-titolo-area" : ""}`}>
        <button className={`button-titolo-area-intervento`} onClick={()=>{setFloor(id)}}>
            <BulletCube style={{height: "32px", width: "32px"}}/>
            <div className={`titolo`}>{name}</div>
        </button>
        {floor===id && <div className={"box-testo-comparsa"}>
            {text}
            {id>1 && <Link className={"gallery-button"} to={`/lavori/${name.replace(/\s+/g, '-')}`}>Vai alla galleria</Link>}
        </div>}
    </div>
}

export default AreaInterventoHome;
