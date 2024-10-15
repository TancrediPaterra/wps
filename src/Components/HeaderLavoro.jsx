import TitoloLavoro from "./TitoloLavoro";
import MenuLaterale from "./MenuLaterale";
import React from "react";
import {ReactComponent as MenuIcon} from "../Assets/SVG/Menu.svg";
import {ReactComponent as Logo} from "../Assets/SVG/Logo.svg";
import {Link} from "react-router-dom";

function HeaderLavoro({name, date, subName, place, isMenuOpen, toggleMenu}) {
    return <div className="header-lavoro">
        <Link to={"/"}><Logo className="logo"/></Link>
        <TitoloLavoro name={name} date={date} subName={subName} place={place}/>

        {isMenuOpen ? (<MenuLaterale toggleMenu={toggleMenu}/>) : (
            <MenuIcon className="open-menu-button" onClick={toggleMenu}/>)}
    </div>
}
export default HeaderLavoro
