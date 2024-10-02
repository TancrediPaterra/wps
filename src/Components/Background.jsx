import React, { useEffect, useState } from "react";
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

    const [currentImage, setCurrentImage] = useState(backgrounds[floor]);

    useEffect(() => {
        if (floor !== precedentFloor) {
            setCurrentImage(backgrounds[floor]); // Aggiorna subito l'immagine per la nuova animazione
        }
    }, [floor]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={precedentFloor} // Usa previousFloor per gestire l'animazione di uscita
                initial={{ opacity: 0.5, y: precedentFloor < floor ? "100%" : "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0.5, y: precedentFloor < floor ? "-100%" : "100%" }}
                transition={{ duration: 0.8 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${currentImage})`,
                        backgroundSize: "cover",
                        width: "100vw",
                        height: "100vh",
                        zIndex: -1,
                    }}
                ></div>
            </motion.div>
        </AnimatePresence>
    );
}
