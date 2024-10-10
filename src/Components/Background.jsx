import React, {useEffect, useMemo, useRef} from "react";

import BACKGROUND_0 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_BLACK_CLEAR.webp";
import BACKGROUND_1 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_PRESENTAZIONE_CLEAR.webp";
import BACKGROUND_2 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_PERCORSI_CLEAR.webp";
import BACKGROUND_3 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_AMBIENTI_CLEAR.webp";
import BACKGROUND_4 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_SISTEMI_CLEAR.webp";
import BACKGROUND_5 from "../Assets/BACKGROUNDS/BACKGROUND_HOME_GRAFICA_CLEAR.webp";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import '../slider.css'
import {EffectCube} from "swiper/modules";

// Inizializza il modulo

export default function Background({actualFloor, direction }) {
    const backgrounds:string[] =[BACKGROUND_0,BACKGROUND_1, BACKGROUND_2, BACKGROUND_3, BACKGROUND_4, BACKGROUND_5];
    const backgroundsImages=useRef([]);

    function RenderSwiperSlides() {
        backgroundsImages.current = backgrounds.map((src) => {
            const img = new Image();
            img.src = src;
            img.className = ".swiper-slide-img"
            return img;
        });
        return useMemo(() => {
            return backgroundsImages.current.map((img, index) => (
                <SwiperSlide key={index} className={"swiper-slide"}>
                    <img src={img.src} alt={`Background ${index}`} className="swiper-slide-img"/>
                </SwiperSlide>))
        })
    }

    //Montaggio Ref Swiper
    const swiperRef = useRef(null);
    const onSwiper = (swiper) => {
        swiperRef.current = swiper; // Salva il riferimento allo swiper
    };

    useEffect(()=>{
        if(swiperRef.current){
            swiperRef.current.slideTo(actualFloor, 1500);
        }
    }, [actualFloor]);

    return <Swiper
        onSwiper={onSwiper}
        modules={[EffectCube]}
        initialSlide={0}
        cubeEffect={{shadow: false, slideShadows: false}}
        effect={"cube"}
        direction={'vertical'}
        className="swiper"
        enabled={"false"}

    >
        {RenderSwiperSlides()}
    </Swiper>
}