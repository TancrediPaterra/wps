import Titolo from "./Titolo";
import MenuLaterale from "./MenuLaterale";
import React from "react";
import {ReactComponent as MenuIcon} from "../Assets/Menu.svg";
import {ReactComponent as Logo} from "../Assets/Logo.svg";

function Header({name, date, subName, place, isMenuOpen, toggleMenu}) {
    return <div className="header">
        <Logo className="logo"/>
        <Titolo name={name} date={date} subName={subName} place={place}/>
        {isMenuOpen ? (<MenuLaterale toggleMenu={toggleMenu}/>) : (
            <MenuIcon className="open-menu-button" onClick={toggleMenu}/>)}
    </div>
}
export default Header
