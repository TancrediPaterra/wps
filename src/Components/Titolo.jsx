import React from "react";

function Titolo({show, visible}){
    return <div className={"titolo"} style={ visible? {} : {display:'none'}}>
        <div className={"elemento-titolo"}>PROGETTAZIONE</div>
        <div className={"elemento-titolo"}>DI MUSEI, MOSTRE E</div>
        <div className={"elemento-titolo"}>EVENTI MULTIMEDIALI</div>
    </div>
}

export default Titolo;