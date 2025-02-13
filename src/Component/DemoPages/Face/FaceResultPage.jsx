import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import { useLocation, useNavigate } from 'react-router-dom';

function FaceResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationResult } = location.state || {};

  if (!verificationResult) {
    navigate('/');
    return null;
  }

  const { message, matched_users, image_url } = verificationResult;
  // const matchedNames = matched_users.map(user => user.matched_user.name).join(', ');
  console.log("matched_users are here", matched_users);
  const handleCrossButton = () => navigate('/face-verificationTrial');


  return (
    <div className='h-screen w-[98vw] flex'>
      <button className="popup-close cursor-pointer z-100" onClick={handleCrossButton}>
        &times;
      </button>
      <div className="w-1/2 h-full bg-black rounded-br-2xl animate__animated animate__backInLeft">
        {image_url && (
          <img
            src={image_url}
            alt="Verified Face"
            className="w-full h-full object-cover rounded-br-2xl"
          />
        )}

      </div>
      <div className="w-1/2 h-full animate__animated animate__backInRight">
        <div className="h-full w-full flex flex-col justify-center items-center relative m-auto">

          {matched_users && matched_users.length > 0 ? (
            <div className="w-full max-w-md h-[650px] overflow-y-auto p-2 scrollbar-hidden">
              {matched_users.map((match, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4 space-y-1">
                  <h1 className="text-[1.5rem] font-semibold my-2">Detected Person {index + 1}</h1>
                  <p><span className="text-[#133AFF] font-semibold">Name:</span> {match.matched_user.name}</p>
                  <p><span className="text-[#133AFF] font-semibold">Email:</span> {match.matched_user.email}</p>
                  <p><span className="text-[#133AFF] font-semibold">Phone:</span> {match.matched_user.phone}</p>
                  <p><span className="text-[#133AFF] font-semibold">Gender:</span> {match.matched_user.gender}</p>
                  <p><span className="text-[#133AFF] font-semibold">Date of Birth:</span> {`${match.matched_user.date.day}-${match.matched_user.date.month}-${match.matched_user.date.year}`}</p>
                  <p><span className="text-[#133AFF] font-semibold">Similarity Score:</span> {(match.similarity_score * 100).toFixed(2)}%</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl font-semibold text-red-500">No matched users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FaceResultPage;
