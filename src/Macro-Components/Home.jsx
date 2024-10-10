import '../home.css';

import React, {useEffect, useRef, useState} from "react";
import DiagonaleCubi from "../Components/DiagonaleCubi";
import DiagonaleAree from "../Components/DiagonaleAree";

import MenuLaterale from "../Components/MenuLaterale";
import ScrollerBox from "../Components/ScrollerBox";
import {ReactComponent as Logo} from "../Assets/SVG/Logo.svg";
import Background from "../Components/Background";


function Home({floors, isMenuOpen, toggleMenu}) {
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
    const maxScroll = window.innerHeight/10; // Numero arbitrario che definisce il massimo dello scroll (puoi personalizzarlo)
    const totalLevels = 5;  // Il numero di fasce di livello che desideri (6 in questo caso)
    let scrollAmountRef = useRef(0); // Variabile per tenere traccia dello scroll simulato
    const isThrottling = useRef(false);



    useEffect(() => {
        // //animazione arrows
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

    //scroll event handler
    useEffect(() => {
        const handleScroll = (event) => {
            if (isThrottling.current) return;

            // Aggiorna la variabile di scrollAmount in base all'evento della rotella o del tocco
            let delta = Math.min(event.deltaY || event.touches?.[0].clientY || 0, maxScroll);
            scrollAmountRef.current += delta;

            // Limita scrollAmount tra 0 e maxScroll
            scrollAmountRef.current = Math.max(0, Math.min(scrollAmountRef.current, maxScroll));


            // Calcola il livello basato sullo scroll
            const newFloor = Math.floor((scrollAmountRef.current / maxScroll) * totalLevels);

            // Aggiorna lo stato solo se il livello cambia e blocca eventuali aggiornamenti fino alla fine del timeout
            if (newFloor !== state.floor) {
                changeState(newFloor);
                isThrottling.current = true;
                setTimeout(() => {
                    isThrottling.current = false;
                }, 1200);
            }
        }

        // Aggiungi gli event listener per wheel e touchmove
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchmove', handleScroll);

        return () => {
            // Rimuovi gli event listener quando il componente viene smontato
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },         // eslint-disable-next-line react-hooks/exhaustive-deps
        [state.floor]);



    return <div className={"home"}>
        <Background actualFloor={state.floor} direction={state.direction}/>
        <div className="logo-grande" onClick={()=>changeState(0)}>
            <Logo className={"logo-grande-svg"}/>
        </div>
        <DiagonaleCubi floors={floors} actualFloor={state.floor} setFloor={changeState}/>
        <DiagonaleAree floors={floors} actualFloor={state.floor} setFloor={changeState}/>
        {isMenuOpen ? <MenuLaterale toggleMenu={toggleMenu}/> : <ScrollerBox floor={state.floor} setFloor={changeState} toggleMenu={toggleMenu}/>}

    </div>
}

export default Home