import React from 'react';
import WinnerCompDetails from './WinnerCompDetails';

const Winners = () => {
    return (
        <div className="bg-black text-white min-h-screen py-10 px-4 md:px-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 text-center md-3 flex gap-4 items-center justify-center font-raleway">
                Achievers <ion-icon name="trophy-outline" className="ml-2 text-4xl md:text-5xl"></ion-icon>
            </h1>
            <p className='text-gray-500 text-center text-2xl mb-10'>"Dare to be different, dare to be an achiever." </p>
            {WinnerCompDetails.map((competition, index) => (
                <div key={index} className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-2">{competition.title}</h2>
                    <p className="text-center text-gray-500 mb-6">{competition.date}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competition.winners.map((winner, idx) => (
                            <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <div className="relative w-32 h-32 bg-yellow-500 rounded-full overflow-hidden border-4 border-green-500 mb-4">
                                    <img src={winner.img} alt={winner.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-center">{winner.name}</h3>
                                <div className='text-center'>
                                    <p className="text-gray-400">Reg No: {winner.regNo}</p>
                                    <p className="text-gray-400">Department: {winner.department}</p>
                                    <p className="text-gray-400 pb-2">Year: {winner.year}</p>
                                    <img src={winner.socialImg} alt={`${winner.name} social`} className='w-96 rounded-md' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="border-gray-600 mt-8" />
                </div>
            ))}
        </div>
    );
};

export default Winners;
