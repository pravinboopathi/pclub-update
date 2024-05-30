import React from 'react';
// import CoOrdinatesDetails from './Co-ordinates Details';
import { staffCoordinators, officeBearers } from './Co-ordinates Details';



const Coordinators= () => {
  return (
    <div className="bg-[#010101] text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl md:text-4xl font-extrabold text-yellow-500 text-center mb-12 ">Co-ordinators</h1>

      <section className="mb-16">
        <h2 className="md:text-4xl text-2xl font-semibold text-teal-500 mb-8 text-center relative ">
          Staff Coordinators
          <span className="block h-1 w-24  mt-2 bg-yellow-500 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {staffCoordinators.map((coordinator, index) => (
            <div key={index} className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 bg-[#f8b607] rounded-full overflow-hidden border-4 border-[#38b2ac] mb-4">
                  <img src={coordinator.img} alt={coordinator.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold">{coordinator.name}</h3>
                <p className="text-lg text-gray-400 text-center mt-2">{coordinator.dept}</p>
                <p className="text-lg text-gray-400 text-center mt-2">{coordinator.intro}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-700 mt-5 w-full" />
      </section>

      <section>
        <h2 className="md:text-4xl text-2xl font-semibold text-teal-400 mb-8 text-center relative">
          Office Bearers
          <span className="block h-1 w-24 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {officeBearers.map((bearer, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 bg-[#f8b607] rounded-full overflow-hidden border-4 border-teal-600 mb-4">
                  <img src={bearer.img} alt={bearer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold">{bearer.name}</h3>
                <p className="text-lg text-gray-400">{bearer.dept}</p>
                <p className="text-lg text-gray-400">{bearer.role}</p>
              </div>
            </div>
          ))}
          
        </div>
        
      </section>
    </div>
  );
};

export default Coordinators;
