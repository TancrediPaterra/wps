import React from "react";

function Cubo({color,id, imgSrc, actualFloor}){
    function handleCube(){
        // console.log(actualFloor);
        if(actualFloor === 0) {
            return <div className={"cube"} style={{overflow: "hidden"}}>
                <img src={imgSrc}
                     style={{width: "150%", height: "150%", transform: "rotate(-45deg)", transformOrigin: "20% 65%"}}
                     alt={"work cube"}/>
            </div>
        }
        else if(actualFloor === id){
            return <div className={"cube"} style={{backdropFilter:"brightness(3)", WebkitBackdropFilter: "brightness(3)"}} id={"cubo-" + id}>
            </div>
        }
        else{
            return <div className={"cube"} style={{backgroundColor: color, overflow: "hidden"}} id={"cubo-" + id}></div>
        }
    }
    return handleCube();
}

export default Cubo;