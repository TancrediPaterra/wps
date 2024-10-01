import React from "react";
import {ReactComponent as ArrowUp} from "../Assets/IMG_ARROW_UP.svg";
import {ReactComponent as ArrowDown} from "../Assets/IMG_ARROW_DOWN.svg";
import {ReactComponent as ArrowSeparator} from "../Assets/IMG_ARROW_SEPARATOR.svg";

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