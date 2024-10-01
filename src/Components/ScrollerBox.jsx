import React from "react";
import Arrow from "./Arrow";

function ScrollerBox({floor, setFloor, toggleMenu}) {
    return <div className={"scroller-box"}>
        <button className="open-menu-button" onClick={toggleMenu}>
            <img src={"/Assets/ICON_MENU.png"} alt="Logo" style={{width: '60px', height: '30px'}}/>
        </button>
        <div className={"arrow-box"}>
            <Arrow floor={floor} setFloor={setFloor}/>
        </div>
    </div>
}

export default ScrollerBox