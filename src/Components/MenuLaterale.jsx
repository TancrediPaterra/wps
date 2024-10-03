import React from "react";
import {Link} from "react-router-dom";

function MenuLaterale({toggleMenu}){
    return <div className={"menu-laterale"}>
        <button className={"close-menu-button"} onClick={toggleMenu}>X</button>
        <div className={"menu-laterale-fascia"}>
                <Link to={"/"} className={"menu-laterale-voce"} onClick={toggleMenu}>HOME</Link>
                <Link to={"/lavori"} className={"menu-laterale-voce"} onClick={toggleMenu}>LAVORI</Link>
                <Link to={"/contact"} className={"menu-laterale-voce"} onClick={toggleMenu}>CONTATTI</Link>
        </div>
    </div>
}

export default MenuLaterale