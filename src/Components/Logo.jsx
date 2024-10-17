import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as LogoSvg} from "../Assets/SVG/Logo.svg";

export default function Logo({dimensione}){
    return <Link to={"/"}><LogoSvg className={`logo-${dimensione}`}/></Link>
}
