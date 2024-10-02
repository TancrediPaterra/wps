import React, {useEffect, useRef, useState} from "react";
import BACKGROUND_0 from "../Assets/IMG-BLACK_BACKGROUND.webp";
import BACKGROUND_1 from "../Assets/IMG-PRESENTAZIONE.webp";
import BACKGROUND_2 from "../Assets/IMG-PERCORSI.webp";
import BACKGROUND_3 from "../Assets/IMG-AMBIENTI.webp";
import BACKGROUND_4 from "../Assets/IMG-SISTEMI.webp";
import BACKGROUND_5 from "../Assets/IMG-GRAFICA.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Background({ floor, precedentFloor }) {
    const backgrounds = {
        0: BACKGROUND_0,
        1: BACKGROUND_1,
        2: BACKGROUND_2,
        3: BACKGROUND_3,
        4: BACKGROUND_4,
        5: BACKGROUND_5
    };

    const previousFloorRef = useRef(floor); // Ref per mantenere il valore precedente di floor
    const [currentImage, setCurrentImage] = useState(backgrounds[floor]);

    // Quando cambia il floor, aggiornare l'immagine immediatamente e avviare l'animazione
    useEffect(() => {
        console.log("Animazione Back:" + previousFloorRef.current + "  " + floor);
        if (floor !== previousFloorRef) {
            setCurrentImage(backgrounds[floor]);
        }
    }, [floor]);

    return (
        <AnimatePresence mode="sync">
            <motion.div
                key={floor} // Usa animatingFloor per evitare problemi di re-render
                initial={{ opacity: 0.0, y: previousFloorRef.current < floor ? "100%" : "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: previousFloorRef.current < floor ? "-100%" : "100%" }}
                transition={{ duration: 1 }}
                onExitComplete={() => {
                    previousFloorRef.current = floor;
                    console.log("Animazione Back: 2.0" + previousFloorRef.current + "  " + floor);

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
    );
}
