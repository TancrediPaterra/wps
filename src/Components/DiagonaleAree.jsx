import React from "react";
import AreaInterventoHome from "./AreaInterventoHome";
import TitoloHome from "./TitoloHome";


function DiagonaleAree({floors, actualFloor, setFloor}){

    return <div className={"diagonale-aree-box"}>

        <TitoloHome show = {() => setFloor(0)} visible={actualFloor===0}/>
        <div className={"diagonale-aree"}>
            {floors.filter(f=>f.floor!==0).map(({areaTitle,imgBackgroundSrc, floor, areaText})=>(
                <AreaInterventoHome
                    id={floor}
                    name={areaTitle}
                    imgSrc = {imgBackgroundSrc}
                    setFloor = {setFloor}
                    floor={actualFloor}
                    text={areaText}
                />))}
        </div>
    </div>
}

export default DiagonaleAree;