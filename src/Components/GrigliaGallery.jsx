import React, { useEffect, useRef } from "react";
import {Link, useParams} from "react-router-dom";

function GrigliaGallery({ lavori }) {

    const { category } = useParams();
    if(category)lavori=lavori.filter((lavoro)=>lavoro.category.contain(category));

    const threshold = 250;
    const itemsRef = useRef([]);

    useEffect(() => {
        function handleScroll() {
            itemsRef.current.forEach((item) => {
                if (item) { // Controlla se l'elemento è definito
                    const itemY = item.getBoundingClientRect().top;
                    // Calcola la differenza tra rect.top e threshold
                    const difference = threshold - itemY;

                    // Controlla se la differenza è positiva (cioè se il contenuto ha superato il threshold)
                    if (difference > 0) {
                        // Calcola la percentuale da nascondere
                        item.style.clipPath = `inset(${difference}px 0 0 0)`; // Nascondi la parte inferiore
                    } else {
                        item.style.clipPath = 'none'; // Mostra tutto
                    }
                }
            });
        }

        // Variabili per monitorare il comportamento del tocco
        let touchStartY = 0;
        let touchMoveY = 0;

        // Funzione per monitorare il punto di partenza del tocco
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY; // Registra la posizione iniziale del tocco
        };

        // Funzione per gestire il movimento del tocco e prevenire il bounce
        const handleTouchMove = (event) => {
            const target = event.target;
            touchMoveY = event.touches[0].clientY; // Registra la posizione corrente del tocco

            const scrollableElement = document.scrollingElement || document.documentElement;
            const scrollTop = scrollableElement.scrollTop;
            const scrollHeight = scrollableElement.scrollHeight;
            const clientHeight = scrollableElement.clientHeight;

            // Prevenire lo scroll verso l'alto se siamo in cima
            if (scrollTop === 0 && touchMoveY > touchStartY) {
                target.preventDefault();
            }

            // Prevenire lo scroll verso il basso se siamo in fondo
            if (scrollTop + clientHeight >= scrollHeight && touchMoveY < touchStartY) {
                target.preventDefault();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, { passive: false }); // 'touchmove' per il movimento del tocco

        // Pulizia dell'event listener al momento dello smontaggio
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div className="gallery">
            {lavori.map(lavoro => (
                <Link to={`/lavori/dettaglio/${lavoro.name}/id/${lavoro.id}`}
                      key={lavoro.id}
                      ref={(el) => {(itemsRef.current[lavoro.id] = el);}}
                      className="gallery-item"
                      style={{backgroundImage: `url("/Assets/${lavoro.img}")`}}>

                        <div className="gallery-item-content">
                            <div>{lavoro.name.replace(/-/g, ' ')}</div>
                            <div>{lavoro.subName}</div>
                            <div>{lavoro.place}</div>
                            <div>{lavoro.date}</div>
                        </div>
                    {/*</div>*/}
                </Link>
            ))}
        </div>
    );
}

export default GrigliaGallery;
