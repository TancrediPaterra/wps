import TitoloLavoro from "./TitoloLavoro";
import MenuLaterale from "./MenuLaterale";
import React from "react";
import {ReactComponent as MenuIcon} from "../Assets/SVG/Menu.svg";

import Logo from "./Logo";

function HeaderLavoro({name, date, subName, place, isMenuOpen, toggleMenu}) {
    return <div className="header-lavoro">
        <Logo dimensione={"normale"}/>
        <TitoloLavoro name={name} date={date} subName={subName} place={place}/>

        {isMenuOpen ? (<MenuLaterale toggleMenu={toggleMenu}/>) : (
            <MenuIcon className="open-menu-button" onClick={toggleMenu}/>)}
    </div>
}
export default HeaderLavoro
