import React, {useEffect} from "react";
import "../gallery.css"
import GrigliaGallery from "../Components/GrigliaGallery";
import {useParams} from "react-router-dom";
import HeaderGallery from "../Components/HeaderGallery";
import {ReactComponent as CubeDiagonal} from "../Assets/SVG/DiagonaleCubi.svg"

import PERCORSI_E_ALLESTIMENTI from "../Assets/BACKGROUNDS/BACKGROUND_GALLERY_PERCORSI.webp"
import AMBIENTI_AUDIOVISIVI from "../Assets/BACKGROUNDS/BACKGROUND_GALLERY_AMBIENTI.webp"
import SISTEMI_INTERATTIVI from "../Assets/BACKGROUNDS/BACKGROUND_GALLERY_SISTEMI.webp"
import GRAFICA_E_COMUNICAZIONE from "../Assets/BACKGROUNDS/BACKGROUND_GALLERY_GRAFICA.webp"

function Gallery({ lavori, toggleMenu, isMenuOpen }) {
    const { categoria } = useParams();

    useEffect(()=>{
        window.scrollTo(0,0);
    })

    const categoryToImageMap = {
        "PERCORSI-E-ALLESTIMENTI": PERCORSI_E_ALLESTIMENTI,
        "AMBIENTI-AUDIOVISIVI": AMBIENTI_AUDIOVISIVI,
        "SISTEMI-INTERATTIVI": SISTEMI_INTERATTIVI,
        "GRAFICA-E-COMUNICAZIONE": GRAFICA_E_COMUNICAZIONE,
    };

    const imgBackgroundSrc = categoria? categoryToImageMap[categoria]:" ";
    if(categoria){
        lavori=lavori.filter((el)=>el.category.includes(categoria));
    }

    return (
        <div className="container-gallery">
            <div className={"background-gallery"} style={{backgroundImage:`url(${imgBackgroundSrc})`}}/>
            <CubeDiagonal className={"small-cube-diagonal"}/>
            <HeaderGallery  isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            <GrigliaGallery lavori={lavori} />
        </div>
    );
}

export default Gallery;