import React from "react";
function AreaInterventoGallery({name}){

    return <div className={`area-intervento-gallery`}>
            <img src={"/Assets/BulletCube.png"} alt={"bullet-cube"}/>
            <div className={`titolo-area-intervento`}>{name}•<b>GALLERY</b> </div>
    </div>
}

export default AreaInterventoGallery;