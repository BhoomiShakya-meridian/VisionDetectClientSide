import React, { useState, useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/minified/introjs.min.css';
import '../../../Style/LiveTesting.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import v1 from '../../../Assest/maskslivetesting.mp4';
import v2 from '../../../Assest/v2.mp4';
import v3 from '../../../Assest/v3.mp4';
// import 

function LiveTesting() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '.back-button',
          intro: 'Click here to go back to the Home page.',
        },
        {
          element: '.education-image',
          intro: 'This section displays the selected video.',
        },
        {
          element: '.video-thumbnails',
          intro: 'Select a video to test it live above. ',
        },
        {
          element: '.submit-button',
          intro: 'After selecting the desired video to test, click on the submit button to generate results.',
        },
      ],
      showProgress: false,
      showBullets: false,
      exitOnOverlayClick: false,
      exitOnEsc: false,
    });

    intro.start();
  }, []);


  const handleCrossButton = () => {
    setSelectedVideo(null);
  };

  // const closeTutorial = () => {
  //   setShowTutorial(false);
  // };

  return (
    <div className="relative">
      <div>
        <FaArrowLeft
          className="back-button relative top-4 left-12 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="education-image">
          {selectedVideo ? (
            <video key={selectedVideo} autoPlay loop muted playsInline className="video-background">
              <source src={selectedVideo} type="video/mp4" />
            </video>
          ) : (
            <div className="video-background bg-black"></div>
          )}
        </div>
        <button
          className="popup-close cursor-pointer z-100"
          onClick={handleCrossButton}
        >
          &times;
        </button>
      </div>

      <div className="video-thumbnails flex flex-row items-center justify-center space-x-8 mt-8">
        {[v1, v2, v3].map((video, index) => (
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

      <div className="flex justify-center items-center m-6">
        <button className="submit-button bg-black text-white text-base px-6 py-2 rounded-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          Submit here
        </button>
      </div>
    </div>
  );
}

export default LiveTesting;
