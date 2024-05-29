import React from 'react';
import sampleImg from '../images/logo.jpg'; // Replace with actual image paths

const staffCoordinators = [
  { name: 'Sumathi', img: sampleImg, intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { name: 'Pranesh', img: sampleImg, intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { name: 'Mohan', img: sampleImg, intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
];

const officeBearers = [
  { role: 'Chairman', name: 'John Doe', img: sampleImg, intro: 'Leading the team with a focus on innovation and excellence.' },
  { role: 'Vice-chairman', name: 'Jane Doe', img: sampleImg, intro: 'Driving strategic initiatives and community engagement.' },
  { role: 'Secretary', name: 'Sam Smith', img: sampleImg, intro: 'Managing communications and organizational tasks.' },
  { role: 'Joint-secretary', name: 'Alex Johnson', img: sampleImg, intro: 'Supporting administrative functions and event planning.' }
];

const Coordinators= () => {
  return (
    <div className="bg-[#010101] text-white min-h-screen p-6 md:p-12">
      <h1 className="text-5xl font-extrabold text-yellow-500 text-center mb-12 ">Coordinators</h1>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-[#007F00] mb-8 text-center relative ">
          Staff Coordinators
          <span className="block h-1 w-24  mt-2 bg-yellow-500 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {staffCoordinators.map((coordinator, index) => (
            <div key={index} className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 bg-[#f8b607] rounded-full overflow-hidden border-4 border-[#007F00] mb-4">
                  <img src={coordinator.img} alt={coordinator.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold">{coordinator.name}</h3>
                <p className="text-lg text-gray-400 text-center mt-2">{coordinator.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold text-[#007F00] mb-8 text-center relative">
          Office Bearers
          <span className="block h-1 w-24 bg-yellow-500 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {officeBearers.map((bearer, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 bg-[#f8b607] rounded-full overflow-hidden border-4 border-[#007F00] mb-4">
                  <img src={bearer.img} alt={bearer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold">{bearer.name}</h3>
                <p className="text-lg text-gray-400">{bearer.role}</p>
                <p className="mt-4 text-base text-center">{bearer.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Coordinators;
