import React, {useEffect, useRef, useState} from "react";
import DiagonaleCubi from "./DiagonaleCubi";
import data from "../Assets/data.json";
import DiagonaleAree from "./DiagonaleAree";

import MenuLaterale from "./MenuLaterale";
import ScrollerBox from "./ScrollerBox";
import {Link} from "react-router-dom";
import Background from "./Background";


function Home() {

    const [floor, setFloor] = useState(0);
    const precedentFloor = useRef(0);
    const [isMenuOpen, setIsMenuOpen]= useState(false);


    const maxScroll = window.innerHeight/10; // Numero arbitrario che definisce il massimo dello scroll (puoi personalizzarlo)
    const totalLevels = 5;  // Il numero di fasce di livello che desideri (6 in questo caso)
    let scrollAmountRef = useRef(0); // Variabile per tenere traccia dello scroll simulato
    const isThrottling = useRef(false);



    //gestione cambio piano
    useEffect(() => {
        // const urlImg = getImageByFloorId(floor);
        // const background = document.querySelector(".background-image");
        // background.style.background=`#000 url(${backgrounds[floor]}) center/cover no-repeat`;
        // background.style.transition="background-image 0.5s ease-in-out";
        // background.style.opacity= data.floors.find(f => f.floor === floor)?.imgBackgroundOpacity;
        // // eslint-disable-next-line

        // //animazione arrows
        if(!isMenuOpen){
            if(precedentFloor.current<floor) {
                document.querySelector(".arrow-down").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-down").classList.remove("active");
                }, 700);

            }
            else if (precedentFloor.current>floor){
                document.querySelector(".arrow-up").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-up").classList.remove("active");
                }, 700);
            }
        }


        precedentFloor.current=floor;
        console.log(floor);
    }, [floor]);

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
            if (newFloor !== floor) {
                setFloor(newFloor);
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
    }, [floor]);

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

    return <div>
        <Background floor={floor} setFloor={setFloor} precedentFloor={precedentFloor}/>
        {/*<div className={"background-image"}></div>*/}
        <div className="logo" onClick={()=>setFloor(0)}>
                <img src="/Assets/Logo.svg" alt="WPS Multimedia"/>
        </div>
        <DiagonaleCubi floors={data.floors} actualFloor={floor} setFloor={setFloor}/>
        <DiagonaleAree floors={data.floors} actualFloor={floor} setFloor={setFloor}/>

        {isMenuOpen ? <MenuLaterale toggleMenu={toggleMenu}/> : <ScrollerBox floor={floor} setFloor={setFloor} toggleMenu={toggleMenu}/>}

    </div>
}

export default Home