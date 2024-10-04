import React from "react";

function TitoloHome({visible}){
    return <div className={"titolo-home"} style={ visible? {} : {opacity:'0'}}>
        <div className={"elemento-titolo"}>PROGETTAZIONE</div>
        <div className={"elemento-titolo"}>DI MUSEI, MOSTRE E</div>
        <div className={"elemento-titolo"}>EVENTI MULTIMEDIALI</div>
    </div>
}

export default TitoloHome;