import '../home.css';

import React, {useEffect, useRef, useState} from "react";
import DiagonaleCubi from "../Components/DiagonaleCubi";
import DiagonaleAree from "../Components/DiagonaleAree";

import MenuLaterale from "../Components/MenuLaterale";
import ScrollerBox from "../Components/ScrollerBox";
import {ReactComponent as Logo} from "../Assets/SVG/Logo.svg";
import Background from "../Components/Background";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


function Home({floors, isMenuOpen, toggleMenu}) {
    const totalLevels = 5;
    const [state, setState] = useState({
        precedentFloor: 0,
        floor: 0,
        direction: "down"
    });

    function changeState(newFloor){
        if (newFloor!==state.floor){
            const precedentFloor= state.floor;
            const floor = newFloor;
            const direction = floor > precedentFloor ? "down":"up";
            setState({
                precedentFloor:precedentFloor,
                floor: floor,
                direction: direction
            })
        }
    }

    //Gestione scroll
    function upHandler(){
        if (state.floor>0){
            const precedentFloor= state.floor;
            const floor = state.floor-1;
            const direction = "up";
            setState({
                precedentFloor:precedentFloor,
                floor: floor,
                direction: direction
            })
        }
    }
    function downHandler(){
        if (state.floor<totalLevels){
            const precedentFloor= state.floor;
            const floor = state.floor+1;
            const direction = "down";
            setState({
                precedentFloor:precedentFloor,
                floor: floor,
                direction: direction
            })
        }
    }

    //Animazione frecce
    useEffect(() => {
        if(!isMenuOpen){
            if(state.precedentFloor!==state.floor){
                const arrowElement = document.querySelector(`.arrow-${state.direction}`);
                arrowElement.classList.toggle("active");
                setTimeout(() => {
                    arrowElement.classList.toggle("active");
                }, 500);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);


    return <div className={"home"}>
        <ReactScrollWheelHandler upHandler={upHandler} downHandler={downHandler} timeout={1500}>
            <Background actualFloor={state.floor} direction={state.direction}/>
            <Logo className={"logo-grande"} onClick={()=>changeState(0)}/>
            <DiagonaleCubi floors={floors} actualFloor={state.floor} setFloor={changeState}/>
            <DiagonaleAree floors={floors} actualFloor={state.floor} setFloor={changeState}/>
            {isMenuOpen ? <MenuLaterale toggleMenu={toggleMenu}/> : <ScrollerBox floor={state.floor} setFloor={changeState} toggleMenu={toggleMenu}/>}
        </ReactScrollWheelHandler>
    </div>
}

export default Home