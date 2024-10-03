import React from "react";
import {ReactComponent as Logo} from "../Assets/Logo.svg";
import "../gallery.css"
import AreaInterventoGallery from "./AreaInterventoGallery";
import GrigliaGallery from "./GrigliaGallery";
import MenuLaterale from "./MenuLaterale";
import {ReactComponent as MenuIcon} from "../Assets/Menu.svg";


function Gallery({ lavori, toggleMenu, isMenuOpen }) {
    return (
        <div className="gallery">
            {/* Sfondo fisso */}
            <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    backgroundImage: `url("/Assets/Test-Gallery.jpg")`,
                    height: '100vh',
                    width: '100vw',
                    backgroundRepeat: 'no-repeat',
                    zIndex: '-1',
                }}
            />

            {/* Header trasparente */}
            <div className="header-gallery">
                <Logo className="logo" />
                <AreaInterventoGallery name="PERCORSI E ALLESTIMENTI" />
                {isMenuOpen ? (
                    <MenuLaterale toggleMenu={toggleMenu} />
                ) : (
                    <MenuIcon className="open-menu-button" onClick={toggleMenu} />
                )}
            </div>

            {/* Griglia */}
            <GrigliaGallery lavori={lavori} />
        </div>
    );
}

export default Gallery;