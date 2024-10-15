import MenuLaterale from "./MenuLaterale";
import React from "react";
import {ReactComponent as MenuIcon} from "../Assets/SVG/Menu.svg";
import {ReactComponent as Logo} from "../Assets/SVG/Logo.svg";
import {ReactComponent as BulletCube} from "../Assets/SVG/BulletCube.svg";
import {Link, NavLink} from "react-router-dom";


function HeaderGallery({isMenuOpen, toggleMenu}) {
    return <div className="header-gallery">
        <Link to={"/"}><Logo className="logo"/></Link>

        <div className={"box-nav-gallery"}>
            <BulletCube style={{height: "32px", width: "32px"}}/>
            <NavLink to={"/lavori"} end  className={"link-nav-gallery"}>Gallery</NavLink>
            <NavLink to={"/lavori/PERCORSI-E-ALLESTIMENTI"} className={"link-nav-gallery"}>Percorsi e Allestimenti</NavLink>
            <NavLink to={"/lavori/AMBIENTI-AUDIOVISIVI"} className={"link-nav-gallery"}>Ambienti Audiovisivi</NavLink>
            <NavLink to={"/lavori/SISTEMI-INTERATTIVI"} className={"link-nav-gallery"}>Sistemi Interattivi</NavLink>
            <NavLink to={"/lavori/GRAFICA-E-COMUNICAZIONE"} className={"link-nav-gallery"}>Grafica e Comunicazione</NavLink>
        </div>
        {isMenuOpen ? (<MenuLaterale toggleMenu={toggleMenu}/>) : (
            <MenuIcon className="open-menu-button" onClick={toggleMenu}/>)}
    </div>
}
export default HeaderGallery
