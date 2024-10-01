import React, {useEffect, useRef, useState} from "react";
import DiagonaleCubi from "./DiagonaleCubi";
import data from "../Assets/data.json";
import DiagonaleAree from "./DiagonaleAree";

import BACKGROUND_0 from "../Assets/IMG-BLACK_BACKGROUND.png"
import BACKGROUND_1 from "../Assets/IMG-PRESENTAZIONE.webp"
import BACKGROUND_2 from "../Assets/IMG-PERCORSI.webp"
import BACKGROUND_3 from "../Assets/IMG-AMBIENTI.webp"
import BACKGROUND_4 from "../Assets/IMG-SISTEMI.webp"
import BACKGROUND_5 from "../Assets/IMG-GRAFICA.webp"
import MenuLaterale from "./MenuLaterale";
import ScrollerBox from "./ScrollerBox";


function Home() {

    const [floor, setFloor] = useState(0);
    const precFloor = useRef(0);
    const [isMenuOpen, setIsMenuOpen]= useState(false);

    const backgrounds = {
        0: BACKGROUND_0,
        1: BACKGROUND_1,
        2: BACKGROUND_2,
        3: BACKGROUND_3,
        4: BACKGROUND_4,
        5: BACKGROUND_5
    };

    const maxScroll = window.innerHeight/10; // Numero arbitrario che definisce il massimo dello scroll (puoi personalizzarlo)
    const totalLevels = 5;  // Il numero di fasce di livello che desideri (6 in questo caso)
    let scrollAmountRef = useRef(0); // Variabile per tenere traccia dello scroll simulato
    const isThrottling = useRef(false);


    //gestione cambio piano
    useEffect(() => {
        // const urlImg = getImageByFloorId(floor);
        const background = document.querySelector(".background-image");
        background.style.background=`#000 url(${backgrounds[floor]}) center/cover no-repeat`;
        background.style.transition="background-image 0.5s ease-in-out";
        background.style.opacity= data.floors.find(f => f.floor === floor)?.imgBackgroundOpacity;
        // eslint-disable-next-line

        if(!isMenuOpen){
            if(precFloor.current<floor) {
                document.querySelector(".arrow-down").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-down").classList.remove("active");
                }, 700);

            }
            else if (precFloor.current>floor){
                document.querySelector(".arrow-up").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-up").classList.remove("active");
                }, 700);
            }
        }


        precFloor.current=floor;
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
            console.log(floor);
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
        <div className={"background-image"}></div>
        <div className="logo">
            <img src="/Assets/logo.png" alt="WPS Multimedia"/>
        </div>
        <DiagonaleCubi floors={data.floors} actualFloor={floor} setFloor={setFloor}/>
        <DiagonaleAree floors={data.floors} actualFloor={floor} setFloor={setFloor}/>

        {isMenuOpen ? <MenuLaterale toggleMenu={toggleMenu}/> : <ScrollerBox floor={floor} setFloor={setFloor} toggleMenu={toggleMenu}/>}

    </div>
}

export default Home