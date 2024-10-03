import React, {useEffect, useRef} from "react";

function GrigliaGallery({ lavori }) {

    const threshold = 300;
    const itemsRef = useRef([]);

    useEffect(() => {
        function handleScroll() {
            console.log(itemsRef.current);
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

        const handleTouchMove = (event) => {
            const target = event.target;

            if (target.scrollTop === 0 && event.deltaY < 0) {
                // Prevenire lo scroll verso l'alto
                event.preventDefault();
            } else if (target.scrollHeight - target.scrollTop === target.clientHeight && event.deltaY > 0) {
                // Prevenire lo scroll verso il basso
                event.preventDefault();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleTouchMove, { passive: false }); // 'touchmove' per il movimento del tocco

        // Pulizia dell'event listener al momento dello smontaggio
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

        return <div className="grid-gallery">
                {lavori.percorsi.map(item => (
                    <div
                        key={item.id}
                        ref={(el) => {
                            (itemsRef.current[item.id] = el);
                            // console.log(itemsRef.current[item.id].getBoundingClientRect().top);
                        }}

                        className="grid-item"
                        style={{backgroundImage: `url("Assets/${item.img}")`, transition: 'opacity 0.5s ease'}}
                    >
                        <div className="grid-item-content">
                            <div>{item.name}</div>
                            <div>{item.place}</div>
                            <div>{item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
}

export default GrigliaGallery;
