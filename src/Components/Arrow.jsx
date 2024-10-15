import React from "react";
import {ReactComponent as ArrowUp} from "../Assets/SVG/ArrowUp.svg";
import {ReactComponent as ArrowDown} from "../Assets/SVG/ArrowDown.svg";
import {ReactComponent as ArrowSeparator} from "../Assets/SVG/ArrowSeparator.svg";

function Arrow({floor, setFloor}){
    return <div className={"arrow-scroll"}>
            <button className={`arrow-up ${floor===0 && "opacity-arrow"}`} onClick={()=>setFloor(floor-1)}>
                <ArrowUp/>
            </button>
            <div>
                <ArrowSeparator/>
            </div>
            <button className={`arrow-down ${floor===5 && "opacity-arrow"}`} onClick={()=>setFloor(floor+1)}>
                <ArrowDown/>
            </button>
        </div>
}

export default Arrow;