import React from "react";

function Cubo({color,id, imgSrc, actualFloor, backImg}){

  function handleCubeStyle() {
      if (actualFloor === id) {
        return {
            backgroundColor: "transparent",
            backdropFilter: "brightness(2.4)",
            WebkitBackdropFilter: "brightness(2.4)"
        }
      } else if (actualFloor !== 0) {
          return {"backgroundColor":color}
      }
  }
    return (
        <div className={"cube"} id={"cubo-" + id}  style={handleCubeStyle()}>
            {actualFloor === 0 && <img src={imgSrc} className={"cube-img"} alt={"work cube"}/>}
        </div>
    )
}

export default Cubo;