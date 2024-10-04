import '../home.css';

import React, {useEffect, useRef, useState} from "react";
import DiagonaleCubi from "../Components/DiagonaleCubi";
import DiagonaleAree from "../Components/DiagonaleAree";

import MenuLaterale from "../Components/MenuLaterale";
import ScrollerBox from "../Components/ScrollerBox";
import {ReactComponent as Logo} from "../Assets/Logo.svg";
import {AnimatePresence, motion} from "framer-motion";
import BACKGROUND_0 from "../Assets/IMG-BLACK_BACKGROUND.webp";
import BACKGROUND_1 from "../Assets/IMG-PRESENTAZIONE.webp";
import BACKGROUND_2 from "../Assets/IMG-PERCORSI.webp";
import BACKGROUND_3 from "../Assets/IMG-AMBIENTI.webp";
import BACKGROUND_4 from "../Assets/IMG-SISTEMI.webp";
import BACKGROUND_5 from "../Assets/IMG-GRAFICA.webp";


function Home({floors, isMenuOpen, toggleMenu}) {

    const [floor, setFloor] = useState(0);
    const precedentFloor = useRef(0);

    const maxScroll = window.innerHeight/10; // Numero arbitrario che definisce il massimo dello scroll (puoi personalizzarlo)
    const totalLevels = 5;  // Il numero di fasce di livello che desideri (6 in questo caso)
    let scrollAmountRef = useRef(0); // Variabile per tenere traccia dello scroll simulato
    const isThrottling = useRef(false);



    //gestione cambio piano
    useEffect(() => {
        // //animazione arrows
        console.log("Animazione Arrow:" + precedentFloor.current + "  " + floor);
        if(!isMenuOpen){
            if(precedentFloor.current<floor) {
                document.querySelector(".arrow-down").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-down").classList.remove("active");
                }, 500);

            }
            else if (precedentFloor.current>floor){
                document.querySelector(".arrow-up").classList.add("active");
                setTimeout(() => {
                    document.querySelector(".arrow-up").classList.remove("active");
                }, 500);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },         // eslint-disable-next-line react-hooks/exhaustive-deps
        [floor]);

    const backgrounds = {
        0: BACKGROUND_0,
        1: BACKGROUND_1,
        2: BACKGROUND_2,
        3: BACKGROUND_3,
        4: BACKGROUND_4,
        5: BACKGROUND_5
    };

    const [currentImage, setCurrentImage] = useState(backgrounds[floor]);

    // Quando cambia il floor, aggiornare l'immagine immediatamente e avviare l'animazione
    useEffect(() => {
        console.log("Animazione Back:" + precedentFloor.current + "  " + floor);
        if (floor !== precedentFloor.current) {
            setCurrentImage(backgrounds[floor]);
        }
    },         // eslint-disable-next-line react-hooks/exhaustive-deps
        [floor]);

    useEffect(() => {
        setTimeout(()=> precedentFloor.current=floor, 1000);

        console.log("AggiornamentoFloor:" + precedentFloor.current + "  " + floor);
    },         // eslint-disable-next-line react-hooks/exhaustive-deps
        [floor]);


    return <div className={"home"}>
        <AnimatePresence mode="sync">
            <motion.div
                key={floor} // Usa animatingFloor per evitare problemi di re-render
                initial={{ opacity: 0.0, y: precedentFloor.current < floor ? "100%" : "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: precedentFloor.current < floor ? "-100%" : "100%" }}
                transition={{ duration: 1 }}
                onExitComplete={() => {
                    precedentFloor.current = floor;
                    console.log("Animazione Back: 2.0" + precedentFloor.current + "  " + floor);

                    // Aggiorna il previousFloorRef solo dopo che l'animazione è completata
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: "cover",
                    zIndex: -1
                }}
            >
            </motion.div>
        </AnimatePresence>

        {/*<Background floor={floor} setFloor={setFloor} precedentFloor={precedentFloor.current}/>*/}
        {/*<div className={"background-image"}></div>*/}
        <div className="logo-grande" onClick={()=>setFloor(0)}>
            <Logo className={"logo-grande-svg"}/>
                {/*<img src="../Assets/Logo.svg" alt="WPS Multimedia"/>*/}
        </div>
        <DiagonaleCubi floors={floors} actualFloor={floor} setFloor={setFloor}/>
        <DiagonaleAree floors={floors} actualFloor={floor} setFloor={setFloor}/>

        {isMenuOpen ? <MenuLaterale toggleMenu={toggleMenu}/> : <ScrollerBox floor={floor} setFloor={setFloor} toggleMenu={toggleMenu}/>}

    </div>
}

export default Home