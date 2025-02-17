import React, { useState } from 'react';
import '../../../Style/LiveTesting.css';
import crowd from '../../../Assest/crowd.mp4';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import v1 from '../../../Assest/v1.mp4';
import v2 from '../../../Assest/v2.mp4';
import v3 from '../../../Assest/v3.mp4';

function LiveTesting() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null); // state for selected video

  const backButton = () => {
    navigate('/');
  };

  // Update the cross button handler to reset selectedVideo instead of navigating
  const handleCrossButton = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div>
        <FaArrowLeft
          className="relative top-4 left-12 cursor-pointer"
          onClick={backButton}
        />
        <div className="education-image">
        {selectedVideo ? (
  <video
    key={selectedVideo}
    autoPlay
    loop
    muted
    playsInline
    className="video-background"
  >
    <source src={selectedVideo} type="video/mp4" />
    Your browser does not support the video tag.
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

      <div className="flex flex-row items-center justify-center space-x-8 mt-8">
        <video
          onClick={() => setSelectedVideo(v1)}
          autoPlay loop muted playsInline
          className="w-70 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
        >
          <source src={v1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          onClick={() => setSelectedVideo(v2)}
          autoPlay loop muted playsInline
          className="w-70 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
        >
          <source src={v2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          onClick={() => setSelectedVideo(v3)}
          autoPlay loop muted playsInline
          className="w-70 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
        >
          <source src={v3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className='flex justify-center items-center m-6'>
        <button className='bg-black text-white text-base px-6 py-2 rounded-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer'>
          Submit here
        </button>
      </div>
    </div>
  );
}

export default LiveTesting;
