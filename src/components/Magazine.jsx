import React from 'react';
import { useNavigate } from 'react-router-dom';

const Magazine = () => {
    const navigate = useNavigate();
    const magazineUrl = "https://heyzine.com/flip-book/4203a3c023.html";

    const handleNavigation=(path)=>{
        navigate(path);
    }

  return (
    <div className="bg-[#010101] text-white min-h-screen py-10 px-4 md:px-20">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 text-center mb-10">
        Club Magazine
      </h1>
      
      {/* Magazine Embed Section */}
      <div className="flex flex-col items-center justify-center mb-5 md:mb-10">
        <p className="text-sm md:text-xl text-gray-300 text-center mb-6">
          Explore the latest edition of our club magazine, featuring articles, photos, and updates about our recent events and activities.
        </p>
        <iframe
          allowFullScreen
          className="rounded-md border-2 border-green h-[600px] w-full max-w-4xl"
          src={magazineUrl}
        ></iframe>
      </div>

      {/* Fullscreen Button */}
      <div className="text-center">
        <a
          href={magazineUrl}
          target="_blank" 
          className="inline-block bg-green-600 hover:bg-green border border-white hover:border-green text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
         <h1>View Fullscreen</h1> 
        </a>
      </div>

      <p onClick={()=> handleNavigation('/')} className='hover:cursor-pointer text-gray-500 text-sm text-center mt-5 hover:text-gray-400'>Go back to Home </p>
    </div>
  );
};

export default Magazine;
