import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import v1 from '../../../Assest/maskslivetesting.mp4';
import v2 from '../../../Assest/v2.mp4';
import v3 from '../../../Assest/v3.mp4';
import analyzedv2 from '../../../Assest/anomalydetection2.mp4';
import arrow from '../../../Assest/arr2.png'
import '../../../Style/LiveTesting.css'


function LiveTesting() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAnalyzedVideo, setShowAnalyzedVideo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleSubmit = () => {
    // Wait for 4 seconds, then display the "analyzedv2" video
    setTimeout(() => {
      setShowAnalyzedVideo(true);
    }, 4000);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="relative">
      {/* Overlay appears on page load; clicking anywhere on it will remove it */}
      {showOverlay && (
        <div>
          <div
            onClick={() => setShowOverlay(false)}
            className="fixed inset-0 bg-black"
            style={{ opacity: 0.8, zIndex: 50 }}
          ></div>
          <div id="submithere" className="fixed">
           <span className='font-semibold'>Step 3:</span> After selecting the desired video to test, click on the submit button to generate results.
          </div>
        </div>
)}

      <div className="relative">
        {/* Back Button */}
        <FiArrowLeft
          className="back-button z-500000 relative text-2xl top-4 h-12 w-12 p-2 bg-white border-4 border-white text-black rounded-full left-12 cursor-pointer "
          onClick={handleBackClick}
        />
        {showOverlay && (
          <div
            id="backbuttonarrow"
            className="fixed "
          >
            <span className='font-semibold'>Step 1:</span> Click here to go back to the homepage.
          </div>
        )}

        <div className="relative w-full h-[20rem] mx-auto pt-2 space-x-12">
          {/* Video Container */}
          <div className={`relative w-4/5 h-[20rem] mx-auto  ${showAnalyzedVideo ? 'flex gap-x-6' : ''}`}>
            {/* Selected Video */}
            <div className={`${showAnalyzedVideo ? 'w-1/2' : 'w-full'} h-full overflow-hidden bg-cover bg-bottom bg-no-repeat rounded-[30px] transition-all duration-500`}>
              {selectedVideo ? (
                <video
                  key={selectedVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-bottom mr-4"
                >
                  <source src={selectedVideo} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full bg-black"></div>
              )}
            </div>

            {/* Analyzed Video */}
            {showAnalyzedVideo && (
              <div className="w-1/2 h-full overflow-hidden bg-cover bg-bottom bg-no-repeat rounded-[30px]">
                <video
                  key={analyzedv2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-bottom"
                >
                  <source src={analyzedv2} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>

        <button
          className="popup-close cursor-pointer z-200"
          onClick={() => {
            setSelectedVideo(null);
            setShowAnalyzedVideo(false);
          }}
        >
          &times;
        </button>
      </div>

      {/* Video Thumbnails */}
      <div className="relative flex flex-row items-center justify-center space-x-8 mt-8">
        {showOverlay && (
          <div
          id="selectVideo"
          className="fixed "
          >
            <span className='font-semibold'>Step 2:</span> Select a video to test it live above.
          </div>
        )}
        {[v1].map((video, index) => (
          <video
            key={index}
            onClick={() => setSelectedVideo(video)}
            autoPlay
            loop
            muted
            playsInline
            className="w-70 border-4 border-white h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer z-10000"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        {[v2, v3].map((video, index) => (
          <video
            key={index}
            onClick={() => setSelectedVideo(video)}
            autoPlay
            loop
            muted
            playsInline
            className="w-70 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Submit Button */}
      <div className="relative z-200 flex justify-center items-center m-2">
        <button
          className="bg-black border-4 border-white text-white text-base px-6 py-2 rounded-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={handleSubmit}
        >
          Submit here
        </button>
      </div>
    </div>
  );
}

export default LiveTesting;
