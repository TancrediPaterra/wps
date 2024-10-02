import React from "react";
import AreaIntervento from "./AreaIntervento";
import Titolo from "./Titolo";


function DiagonaleAree({floors, actualFloor, setFloor}){

    return <div className={"diagonale-aree-box"}>

        <Titolo show = {() => setFloor(0)} visible={actualFloor===0}/>
        <div className={"diagonale-aree"}>
            {floors.filter(f=>f.floor!==0).map(({areaTitle,imgBackgroundSrc, floor, areaText})=>(
                <AreaIntervento
                    id={floor}
                    name={areaTitle}
                    imgSrc = {imgBackgroundSrc}
                    setFloor = {setFloor}
                    isBoxVisible={actualFloor===floor}
                    text={areaText}
                />))}
        </div>
    </div>
}

export default DiagonaleAree;