import React from 'react';
import sampleImg from '../images/logo-removebg-preview (1).png'; // Replace with actual image paths


const images = [
  { id: 1, src: sampleImg, alt: 'Event 1', size: 'large' },
  { id: 2, src: sampleImg, alt: 'Event 2', size: 'small' },
  { id: 3, src: sampleImg, alt: 'Event 3', size: 'medium' },
  { id: 4, src: sampleImg, alt: 'Event 4', size: 'large' },
  { id: 5, src: sampleImg, alt: 'Event 5', size: 'small' },
  { id: 6, src: sampleImg, alt: 'Event 6', size: 'medium' }
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="bg-[#010101] text-white min-h-screen p-6 md:p-12">
      <h1 className="text-5xl font-extrabold text-yellow-500 text-center mb-12">Gallery</h1>
      <p className='text-center text-gray-600 text-2xl'>There's nothing here Yet !</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${getImageSizeClasses(image.size)}`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const getImageSizeClasses = (size) => {
  switch (size) {
    case 'large':
      return 'row-span-2 col-span-2';
    case 'medium':
      return 'row-span-2';
    case 'small':
    default:
      return 'col-span-1';
  }
};

export default Gallery;
