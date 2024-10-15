import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import "../gallery.css"
import "../lavoro.css"
import "../videoPlayer.css"
import HeaderLavoro from "../Components/HeaderLavoro";
import {EffectCube, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import {ReactComponent as CubeDiagonal} from "../Assets/SVG/DiagonaleCubi.svg"
import {ReactComponent as ArrowUp}  from "../Assets/SVG/ArrowUp.svg"
import {ReactComponent as ArrowDown}  from "../Assets/SVG/ArrowDown.svg"
import 'swiper/css/pagination';
import VideoPlayer from "../Components/VideoPlayer";



function Lavoro({ lavori, toggleMenu, isMenuOpen }) {
    const { id } = useParams();
    const [showVideo, setShowVideo] = useState(false);
    //TODO rendere null-safe
    const swiperRef = useRef(null);
    const onSwiper = (swiper) => {
        swiperRef.current = swiper; // Salva il riferimento allo swiper
        swiper.on(
            'slideChangeTransitionStart', () => {
                // Azione al cambio slide
                const previousSlide = swiper.slides[swiper.previousIndex];
                previousSlide.style.transition = 'opacity 1s ease-in';
                previousSlide.style.opacity = '0';
            });
        swiper.on('slideChangeTransitionEnd', () => {
            // Ripristina l'opacità per la nuova slide in ingresso
            const previousSlide = swiper.slides[swiper.previousIndex];
            previousSlide.style.opacity = '1';
        })
    };
    const lavoro= lavori.find((lav)=>lav.id===parseInt(id, 10));

    function renderImages(){
        return lavoro.images.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide-lavoro">
                <img src={`/Assets/Lavori_Images/${img}`} alt={`Image ${index}`} className="swiper-slide-img-home"/>
            </SwiperSlide>
        ))
    }

    function upHandler(){
        if (!showVideo){
            swiperRef.current.slidePrev(1300);
        }
    }

    function downHandler(){
        if (!showVideo) {
            swiperRef.current.slideNext(1300)
        }
    }

    const videos = [
        {
            videoUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
            thumbnailUrl: '/Assets/Salerno_01.JPG',
            width:"1200px",
            height:"800px"
        }
        ,{
            videoUrl: 'https://www.youtube.com/watch?v=ivukpkSMoYQ',
            width:"400px",
            height:"1200px"
    }];


    return <ReactScrollWheelHandler upHandler={upHandler} downHandler={downHandler} timeout={1300}>
        <div className={"container-lavoro"}>
            <CubeDiagonal className={"small-cube-diagonal"}/>
            <HeaderLavoro name={lavoro?.name.replace(/-/g, ' ')} subName={lavoro?.subName} place={lavoro?.place} date={lavoro?.date} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
            <div className={"sidebar-lavoro"}>
                 <div className={"text-lavoro"}>
                     {lavoro.text}
                </div>
                <VideoPlayer videos={videos} showVideo={showVideo} setShowVideo={setShowVideo}/>
            </div>
            <div className={"content-lavoro"}>
                <Swiper
                    onSwiper={onSwiper}
                    modules={[EffectCube, Pagination]}
                    initialSlide={0}
                    cubeEffect={{shadow: false, slideShadows: false}}
                    effect={"cube"}
                    direction={'vertical'}
                    className="swiper-lavoro"
                    pagination={true}
                >
                    {renderImages()}
                </Swiper>
                <div className={"nav-swiper-lavoro"}>
                    <ArrowUp onClick={upHandler} className={"nav-button-swiper-lavoro"}/>
                    <ArrowDown onClick={downHandler} className={"nav-button-swiper-lavoro"}/>
                </div>
            </div>
    </div>
    </ReactScrollWheelHandler>
}

export default Lavoro