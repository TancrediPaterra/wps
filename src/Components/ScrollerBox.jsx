import React from "react";
import Arrow from "./Arrow";
import {ReactComponent as MenuIcon} from "../Assets/SVG/Menu.svg";

function ScrollerBox({floor, setFloor, toggleMenu}) {
    return <div className={"scroller-box"}>
        <button className="open-menu-button" onClick={toggleMenu}>
            <MenuIcon/>
        </button>
        <div className={"arrow-box"}>
            <Arrow floor={floor} setFloor={setFloor}/>
        </div>
    </div>
}

export default ScrollerBox