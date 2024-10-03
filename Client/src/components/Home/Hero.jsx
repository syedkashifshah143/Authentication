import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import image from "../../assets/image.jpeg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpeg";

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: image
  },
  {
    id: 2,
    name: 'Product 2',
    image: image1
  },
  {
    id: 3,
    name: 'Product 3',
    image: image2
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={products[currentIndex].image}
        alt={products[currentIndex].name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-4">
        <button onClick={handlePrev} className="bg-gray-800 text-white p-2 rounded-full">
          <FaChevronLeft />
        </button>
        <div className="text-white text-lg font-bold">
          {products[currentIndex].name}
        </div>
        <button onClick={handleNext} className="bg-gray-800 text-white p-2 rounded-full">
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((product, index) => (
          <RxDotFilled
            key={product.id}
            className={`cursor-pointer text-white ${index === currentIndex ? 'text-lg' : 'text-sm'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
