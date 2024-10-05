import React from "react";
import "../style.css"
import GrigliaGallery from "../Components/GrigliaGallery";
import {useParams} from "react-router-dom";
import HeaderGallery from "../Components/HeaderGallery";


function Gallery({ lavori, toggleMenu, isMenuOpen }) {
    const { categoria } = useParams();

    //mockup
    const backgroundImages = {
        "PERCORSI-E-ALLESTIMENTI":"BACKGROUND_GALLERY_PERCORSI.webp",
        "AMBIENTI-AUDIOVISIVI": "BACKGROUND_GALLERY_PERCORSI.webp",
        "SISTEMI-INTERATTIVI":"BACKGROUND_GALLERY_PERCORSI.webp",
        "GRAFICA-E-COMUNICAZIONE":"BACKGROUND_GALLERY_PERCORSI.webp"
        }
    const imgBackgroundSrc = categoria? backgroundImages[categoria]:"";
    if(categoria){
        lavori=lavori.filter((el)=>el.category.includes(categoria));
    }

    return (

        <div className="container">
            {/* Sfondo fisso */}
            <div className={"background-gallery"} style={{backgroundImage:`url(/Assets/${imgBackgroundSrc})`}}/>
            <div className={"diagonale-cubi-img"}/>
            <HeaderGallery  isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            <GrigliaGallery lavori={lavori} />
        </div>
    );
}

export default Gallery;