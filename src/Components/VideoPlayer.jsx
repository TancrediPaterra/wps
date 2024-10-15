import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
// import PropTypes from 'prop-types';
import {ReactComponent as ArrowLeft} from "../Assets/SVG/ArrowLeft.svg";
import {ReactComponent as ArrowRight} from "../Assets/SVG/ArrowRight.svg";
const VideoPlayer = ({ videos, showVideo, setShowVideo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    const handleCloseClick = () => {
        setShowVideo(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    // <div style={{"width":"100%"}}>
    return (<>
            {videos.length > 0 && (
                <div className="video-frame" style={{"backgroundImage":`url(${videos[currentIndex].thumbnailUrl})`}}>
                    <div className="play-icon" onClick={handlePlayClick}>
                        {/* Icona Play */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px"
                             height="48px">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    {showVideo && (
                        <div className="overlay" onClick={handleCloseClick}>
                            <div className="actual-video" onClick={(e) => e.stopPropagation()}>
                                <ArrowLeft onClick={handlePrev} className="nav-video-button"/>
                                <ReactPlayer
                                    url={videos[currentIndex].videoUrl}
                                    width={videos[currentIndex].width}
                                    height={videos[currentIndex].height}
                                    playing
                                    controls
                                />
                                <ArrowRight onClick={handleNext} className="nav-video-button"/>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

// Definizione delle propTypes per validare i tipi di dati in entrata
// VideoPlayer.propTypes = {
//     videos: PropTypes.arrayOf(
//         PropTypes.shape({
//             videoUrl: PropTypes.string.isRequired,
//             thumbnailUrl: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default VideoPlayer;