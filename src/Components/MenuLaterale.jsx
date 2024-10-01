import React from "react";

function MenuLaterale({toggleMenu}){
    return <div className={"menu-laterale"}>
        <button className={"close-menu-button"} onClick={toggleMenu}>X</button>
        <div className={"menu-laterale-fascia"}>
            <button className={"menu-laterale-voce"}>HOME</button>
            <button className={"menu-laterale-voce"}>LAVORI</button>
            <button className={"menu-laterale-voce"}>CONTATTI</button>
        </div>
    </div>
}

export default MenuLaterale