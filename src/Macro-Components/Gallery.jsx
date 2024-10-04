import React from "react";
import "../style.css"
import GrigliaGallery from "../Components/GrigliaGallery";
import {useParams} from "react-router-dom";
import Header from "../Components/Header";


function Gallery({ lavori, toggleMenu, isMenuOpen }) {
    const { categoria } = useParams();
    const categorie = {
        "percorsi-e-allestimenti": {
            "titolo":"PERCORSI E ALLESTIMENTI",
            "imgSrc":"BACKGROUND_GALLERY_PERCORSI.webp"
        },
        "sistemi-interattivi": "SISTEMI INTERATTIVI",
    };
    const titolo = categoria? categorie[categoria].titolo+" • ":"";
    const imgBackgroundSrc = categoria? categorie[categoria].imgSrc+" • ":" ";

    return (

        <div className="container">
            {/* Sfondo fisso */}
            <div className={"background-gallery"} style={{backgroundImage:`url(${imgBackgroundSrc})`}}/>
            <div className={"diagonale-cubi-img"}/>
            <Header name={titolo + "Gallery"} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            {/*<div className="header">*/}
            {/*    <Logo className="logo" />*/}
            {/*    <Titolo name={titolo + "Gallery"} date={null} subName={null} place={null}/>*/}
            {/*    {isMenuOpen ? (<MenuLaterale toggleMenu={toggleMenu} />) : (<MenuIcon className="open-menu-button" onClick={toggleMenu} />)}*/}
            {/*</div>*/}
            <GrigliaGallery lavori={lavori} />
        </div>
    );
}

export default Gallery;