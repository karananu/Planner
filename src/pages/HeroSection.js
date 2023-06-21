import React, { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';

export default function HeroSection() {
  useEffect(() => {
    var images = [
      "abstract-colorful-geometric-shape-background-modern-color-background-for-your-website-vector.jpg",
      "images.jpg",
      "images(1).jpg",
      "Jellyfish.jpg",
      "hero-bg.jpg"
    ];

    var cursorElement = document.querySelector('.cursor');
    var shuffledImages = shuffle(images);

    var i = 0;

    function changeBackground() {
      cursorElement.style.backgroundImage = `url(images/${shuffledImages[i]})`;
      cursorElement.style.display = 'none';
      $(cursorElement).fadeIn('slow');
      i++;
      if (i === shuffledImages.length) {
        shuffledImages = shuffle(images);
        i = 0;
      }
    }

    changeBackground(); 

    setInterval(changeBackground, 5000); // Change background image every 5 seconds
  }, []);

  function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover cursor"
          src="/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-serif">
          Experience Unforgettable Moments: Book Your Next Event Today!
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300 font-serif">
          Book Memorable Experiences Today: Discover{' '}
          <span> and Book Your Next Event with Ease on Our Platform - Your One-Stop Shop for Unforgettable Adventures.</span>
        </p>
        <div className="mt-12">
          <a
            href="https://chat.whatsapp.com/JAZuZjBUhjnKvAiMkam7B8"
            className="inline-block bg-white py-3 px-6 font-bold text-lg text-gray-900 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50"
          >
            <button>Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
